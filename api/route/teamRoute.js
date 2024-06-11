import express from "express"
import { getEntityByID, getEntityByQuery } from "../controller/entityController.js";

const router = express()


router.get("/teams/getByID/:id", async (req,res) => {
    const id = req.params.id;
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
    const { name, version } = req.query;
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
    const { version } = req.params;
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
