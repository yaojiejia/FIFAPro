import express from "express"
import playerRoute from "./route/playerRoute.js"
import teamRoute from "./route/teamRoute.js"
import authRoute from "./route/authRoute.js"
const app = express()

app.use(express.json())
app.use("/api", playerRoute)
app.use("/api", teamRoute)
app.use("/auth", authRoute)
app.listen(8800, () => {
    // console.log('Server is running on port 8800')
})

export default app

