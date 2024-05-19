import express from "express"
import { getAllPlayersByVersion, getPlayerByQuery, getPlayerID } from "../controller/playerController.js"
const router = express.Router();

router.get("/players/getByID/:id", getPlayerID)
router.get("/players/getByName/", getPlayerByQuery)
router.get("/players/version", getAllPlayersByVersion) //takes longer time response



export default router