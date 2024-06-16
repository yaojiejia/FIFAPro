import express from "express"
import { getEntityByID, getEntityByQuery, getAllEntitiesByVersion } from "../controller/entityController.js"
import { apiVeryfication } from "../service/apiVerification.js";
const router = express.Router();


router.get("/players/getByID/", async (req, res) => {
    const {id, apiKey} = req.query;
    const verified = await apiVeryfication(apiKey);
    if (!verified || !apiKey) {
        res.status(401).json({ message: 'Unauthorized, Check Documentation' });
        return;
    }

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
    const { name, version, apiKey } = req.query;
    const verified = await apiVeryfication(apiKey);
    if (!verified || !apiKey) {
        res.status(401).json({ message: 'Unauthorized, Check Documentation' });
        return;
    }
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
    const { version, apiKey } = req.query;
    const verified = await apiVeryfication(apiKey);
    if (!verified || !apiKey) {
        res.status(401).json({ message: 'Unauthorized, Check Documentation' });
        return;
    }
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