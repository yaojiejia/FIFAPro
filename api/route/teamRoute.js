import express from "express"
import { getAllPlayersByTeam, getByID, getTeamByQuery } from "../controller/teamController.js"

const router = express()


router.get("/teams/getByID/:id",getByID ) //send id
router.get("/teams/getByName", getTeamByQuery ) //send team name and version number
router.get("/team/getAllPlayers", getAllPlayersByTeam)

export default router
