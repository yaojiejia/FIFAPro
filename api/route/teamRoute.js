import express from "express"
import { getByID, getTeamByQuery } from "../controller/teamController.js"

const router = express()


router.get("/teams/getByID/:id",getByID ) //send id
router.get("/teams/getByName", getTeamByQuery ) //send team name and version number
router.get("/team/getByName/getPlayers", )

export default router
