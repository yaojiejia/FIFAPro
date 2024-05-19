import { PrismaClient } from "@prisma/client";
import csv from 'csv-parser';
import fs from 'fs';

const prisma = new PrismaClient();
const results = [];

// Function to save player data to the database
const savePlayerToDatabase = async (playerData) => {
  try {
    await prisma.player.create({
      data: playerData,
    });
    console.log(`Player ${playerData.name} saved successfully.`);
  } catch (error) {
    console.error(`Error saving player ${playerData.name}:`, error);
  }
};

// Read and process the CSV file
fs.createReadStream('/home/alex/Documents/fc24/male_players.csv')
  .pipe(csv())
  .on('data', (data) => {
    const filteredData = {
      version: parseInt(data.fifa_version),
      name: data.short_name,
      position: data.player_positions,
      nation: data.nationality_name,
      club: data.club_name,
      overall: parseInt(data.overall),
      pot: parseInt(data.potential),
      height: parseInt(data.height_cm),
      weight: parseInt(data.weight_kg),
      pace: parseInt(data.pace) || 0,
      shoot: parseInt(data.shooting) || 0,
      pass: parseInt(data.passing) || 0,
      dribble: parseInt(data.dribbling) || 0,
      defend: parseInt(data.defending) || 0,
      physic: parseInt(data.physic) || 0,
      gk: parseInt(data.goalkeeping_handling) || 0,
    };
    results.push(filteredData);
  })
  .on('end', async () => {
    console.log('CSV file successfully processed.');
    for (const player of results) {
      await savePlayerToDatabase(player);
    }
    // Disconnect the Prisma Client
    await prisma.$disconnect();
  })
  .on('error', (error) => {
    console.error('Error reading CSV file:', error);
  });
