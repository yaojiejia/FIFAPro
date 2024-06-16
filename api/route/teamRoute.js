import express from "express"
import { getEntityByID, getEntityByQuery } from "../controller/entityController.js";
import { apiVeryfication } from "../service/apiVerification.js";
const router = express()


router.get("/teams/getByID/", async (req,res) => {
    const {id, apiKey} = req.query;
    const verified = await apiVeryfication(apiKey);
    if (!verified || !apiKey) {
        res.status(401).json({ message: 'Unauthorized, Check Documentation' });
        return;
    }
    try {
        const result = await getEntityByID(id, "team");
        if (result.error) {
            const statusCode = result.message === 'Team not found, Check Documentation' ? 404 : 500;
            res.status(statusCode).json({ message: result.message });
        } else {
            res.status(200).json(result.data);
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error, Please Check Documentation' });
    }
} ) //send id


router.get("/teams/getByName", async (req, res) =>{
    const { name, version, apiKey } = req.query;
    const verified = await apiVeryfication(apiKey);
    if (!verified || !apiKey) {
        res.status(401).json({ message: 'Unauthorized, Check Documentation' });
        return;
    }
    try{
        const result = await getEntityByQuery(name, version, "team");
        if(result.error){
            const statusCode = result.message === 'Team not found, Check Documentation' ? 404 : 500;
            res.status(statusCode).json({ message: result.message });
        }else{
            res.status(200).json(result.data);
        }
    }catch(error){
        res.status(500).json({ error: 'Internal Server Error, Please Check Documentation' });
    }
} ) //send team name and version number


router.get("/teams/version", async (req,res) =>{
    const { version, apiKey } = req.query;
    const verified = await apiVeryfication(apiKey);
    if (!verified || !apiKey) {
        res.status(401).json({ message: 'Unauthorized, Check Documentation' });
        return;
    }
    try{
        const result = await getAllEntitiesByVersion(version, "team");
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

export default router
