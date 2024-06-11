import express from "express"
import { getEntityByID, getEntityByQuery, getAllEntitiesByVersion } from "../controller/entityController.js"
const router = express.Router();


router.get("/players/getByID/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const result = await getEntityByID(id, "player");
        if (result.error) {
            const statusCode = result.message === 'Player not found, Check Documentation' ? 404 : 500;
            res.status(statusCode).json({ message: result.message });
        } else {
            res.status(200).json(result.data);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error, Please Check Documentation' });
    }
});


router.get("/players/getByName/", async (req,res) =>{
    const { name, version } = req.query;
    try{
        const result = await getEntityByQuery(name, version, "player");
        if(result.error){
            const statusCode = result.message === 'Player not found, Check Documentation' ? 404 : 500;
            res.status(statusCode).json({ message: result.message });
        }else{
            res.status(200).json(result.data);
        }
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error, Please Check Documentation' });
    }
})


router.get("/players/version", async (req,res) =>{
    const { version } = req.params;
    try{
        const result = await getAllEntitiesByVersion(version, "player");
        if(result.error){
            const statusCode = result.message === 'Players not found, Check Documentation' ? 404 : 500;
            res.status(statusCode).json({ message: result.message });
        }else{
            res.status(200).json(result.data);
        }
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error, Please Check Documentation' });
    }
}) //takes longer time response


router.get("/players/updatePlayer")
router.delete("/players/deletePlayer")
router.post("/players/addPlayer")


export default router