import express from "express"
import { createUser } from "../controller/authController.js"
const router = express.Router()

router.get("/register", async (req,res) =>{
    const {username, email, password} = req.body
    try{
        const result = await createUser(username, email, password)
        res.status(201).json(result)
    }
    catch(err){

        console.log(err)
        res.status(500).json({message:"failed to create user"})
    }
})
router.get("/login", (req,res) =>{
    const {username, password} = req.body
    
    

})

export default router