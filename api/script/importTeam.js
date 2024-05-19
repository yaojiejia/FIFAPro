import { PrismaClient } from "@prisma/client";
import csv from 'csv-parser';
import fs from 'fs';

const prisma = new PrismaClient();
const results = [];

// Function to save player data to the database
const saveTeamToDatabase = async (teamData) => {
  try {
    await prisma.team.create({
      data: teamData,
    });
    console.log(`Player ${teamData.name} saved successfully.`);
  } catch (error) {
    console.error(`Error saving player ${teamData.name}:`, error);
  }
};

// Read and process the CSV file
fs.createReadStream('/home/alex/Documents/fc24/male_teams.csv')
  .pipe(csv())
  .on('data', (data) => {
    const filteredData = {
      version: parseInt(data.fifa_version),
      name: data.team_name,
      overall: parseInt(data.overall),
      attack: parseInt(data.attack),
      midfield: parseInt(data.midfield),
      defence: parseInt(data.defence),
      stadium: data.home_stadium || "No Home Stadium",
      league: data.league_name,
      nation: data.nationality_name,
    };
    results.push(filteredData);
  })
  .on('end', async () => {
    console.log('CSV file successfully processed.');
    for (const team of results) {
      await saveTeamToDatabase(team);
    }
    // Disconnect the Prisma Client
    await prisma.$disconnect();
  })
  .on('error', (error) => {
    console.error('Error reading CSV file:', error);
  });
