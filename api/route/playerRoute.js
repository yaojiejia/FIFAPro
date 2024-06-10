import express from "express"
import { getAllPlayersByVersion, getPlayerByQuery, getPlayerID } from "../controller/playerController.js"
const router = express.Router();




router.get("/players/getByID/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const result = await getPlayerID(id);
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
        const result = await getPlayerByQuery(name, version);
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
        const result = await getAllPlayersByVersion(version);
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