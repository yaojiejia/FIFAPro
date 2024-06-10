import prisma from '../lib/prisma.js';




export const getPlayerID = async (id) => {
  try {
    const player = await prisma.player.findUnique({
      where: { id },
    });

    if (!player) {
      return { error: true, message: 'Player not found, Check Documentation' };
    }

    return { error: false, data: player };
  } catch (error) {
    console.error('Error retrieving player:', error);
    return { error: true, message: 'Internal Server Error, Please Check Documentation' };
  } finally {
    await prisma.$disconnect();
  }
};





export const getPlayerByQuery = async (name, version) => {

  try {
    const query = {};

    if (name) {
      query.name = {
        contains: name,
        mode: 'insensitive', // Case-insensitive search
      };
    }

    if (version) {
      query.version = parseInt(version); // Exact match for version
    }

    const player = await prisma.player.findFirst({
      where: query,
    });

    if (!player) {
      return { error: true, message: 'Player not found, Check Documentation' };
    }

    return { error: false, data: player };

  } catch (error) {
    console.error('Error retrieving player:', error);
    return { error: true, message: 'Internal Server Error, Please Check Documentation' };
  } finally {
    await prisma.$disconnect();
  }
};






export const getAllPlayersByVersion = async (version) => {

  try {
    const player = await prisma.player.findMany({
      where: { version: version },
    });

    if (!player) {
      return { error: true, message: 'Player not found, Check Documentation' };
    }

    return { error: false, data: player };

  } catch (error) {
    console.error('Error retrieving player:', error);
    return { error: true, message: 'Internal Server Error, Please Check Documentation' };
  } finally {
    await prisma.$disconnect();
  }
};
