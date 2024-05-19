import prisma from '../lib/prisma.js';

export const getPlayerID = async (req, res) => {
  const { id } = req.params;

  try {
    const player = await prisma.player.findUnique({
      where: { id: id },
    });

    if (player) {
      res.status(200).json(player);
    } else {
      res.status(404).json({ message: 'Player not found, Check Documentation' });
    }
  } catch (error) {
    console.error('Error retrieving player:', error);
    res.status(500).json({ error: 'Internal Server Error, Please Check Documentation' });
  } finally {
    await prisma.$disconnect();
  }
};


export const getPlayerByQuery = async (req, res) => {
  const { name, version } = req.query;

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

    if (player) {
      res.status(200).json(player);
    } else {
      res.status(404).json({ message: 'Player not found, Check Documentation' });
    }
  } catch (error) {
    console.error('Error retrieving player:', error);
    res.status(500).json({ error: 'Internal Server Error, Please Check Documentation' });
  } finally {
    await prisma.$disconnect();
  }
};

export const getAllPlayersByVersion = async (req, res) => {
  const { version } = req.params;

  try {
    const player = await prisma.player.findMany({
      where: { version: version },
    });

    if (player) {
      res.status(200).json(player);
    } else {
      res.status(404).json({ message: 'Player not found, Check Documentation' });
    }
  } catch (error) {
    console.error('Error retrieving player:', error);
    res.status(500).json({ error: 'Internal Server Error, Please Check Documentation' });
  } finally {
    await prisma.$disconnect();
  }
};
