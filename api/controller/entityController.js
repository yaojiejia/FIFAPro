import prisma from '../lib/prisma.js';

export const getEntityByID = async (id, className) => {
  try {
    // Dynamically select the Prisma model based on className
    const model = prisma[className];

    if (!model) {
      return { error: true, message: 'Invalid class name, Check Documentation' };
    }

    const entity = await model.findUnique({
      where: { id },
    });

    if (!entity) {
      return { error: true, message: 'Player not found, Check Documentation' };
    }

    return { error: false, data: entity };
  } catch (error) {
    console.error('Error retrieving player:', error);
    return { error: true, message: 'Internal Server Error, Please Check Documentation' };
  } finally {
    await prisma.$disconnect();
  }
};





export const getEntityByQuery = async (name, version, className) => {
  try {
    const model = prisma[className];

    if (!model) {
      return { error: true, message: 'Invalid class name, Check Documentation' };
    }

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

    const entity = await model.findFirst({
      where: query,
    });

    if (!entity) {
      return { error: true, message: 'Entity not found, Check Documentation' };
    }

    return { error: false, data: entity };

  } catch (error) {
    console.error('Error retrieving entity:', error);
    return { error: true, message: 'Internal Server Error, Please Check Documentation' };
  } finally {
    await prisma.$disconnect();
  }
};





export const getAllEntitiesByVersion = async (version, className) => {
  try {
    const model = prisma[className];

    if (!model) {
      return { error: true, message: 'Invalid class name, Check Documentation' };
    }

    const entities = await model.findMany({
      where: { version: parseInt(version) },
    });

    if (!entities || entities.length === 0) {
      return { error: true, message: 'Entities not found, Check Documentation' };
    }

    return { error: false, data: entities };

  } catch (error) {
    console.error('Error retrieving entities:', error);
    return { error: true, message: 'Internal Server Error, Please Check Documentation' };
  } finally {
    await prisma.$disconnect();
  }
};