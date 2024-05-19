import prisma from '../lib/prisma.js';

export const getByID = async (req,res) =>  {
    const {id} = req.params

    try {
        const team = await prisma.team.findUnique({
          where: { id: id },
        });
    
        if (team) {
          res.status(200).json(team);
        } else {
          res.status(404).json({ message: 'Team not found, Check Documentation' });
        }
      } catch (error) {
        console.error('Error retrieving team:', error);
        res.status(500).json({ error: 'Internal Server Error, Please Check Documentation' });
      } finally {
        await prisma.$disconnect();
      }
    };



export const getTeamByQuery = async (req, res) => {
    const { name, version } = req.query;
      
    try {
        const query = {};
      
        if (name) {
            query.name = {
              contains: name,
              mode: 'insensitive', 
            };
          }
      
        if (version) {
            query.version = parseInt(version); 
          }
      
        const team = await prisma.team.findFirst({
            where: query,
          });
      
        if (team) {
            res.status(200).json(team);
        } else {
            res.status(404).json({ message: 'team not found, Check Documentation' });
          }
        } catch (error) {
          console.error('Error retrieving team:', error);
          res.status(500).json({ error: 'Internal Server Error, Please Check Documentation' });
        } finally {
          await prisma.$disconnect();
        }
      };