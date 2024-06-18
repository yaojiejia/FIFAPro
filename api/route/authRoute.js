import express from "express"
import { createUser, login } from "../controller/authController.js"
import jwt from "jsonwebtoken"
const router = express.Router()

router.post("/register", async (req,res) =>{
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
router.post("/login", async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await login(username, password);
        
        const age = 1000 * 60 * 60 * 24 * 7; 

        const token = jwt.sign({
            id: user.id,
            isAdmin: false
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: '7d' 
        });

        const { password: userPassword, ...userInfo } = user; 

        res.cookie("token", token, {
            httpOnly: true,
            maxAge: age
            // secure: true // Uncomment this in production to send the cookie over HTTPS only
        })
        .status(200)
        .json("logged in!"); 
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Wrong Credentials" });
    }
});

router.post("/logout", (req, res) => {
    res.clearCookie("token").send("Logged out!");
});
export default router