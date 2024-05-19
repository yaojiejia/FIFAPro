import express from "express"
import playerRoute from "./route/playerRoute.js"
const app = express()

app.use(express.json())
app.use("/api",playerRoute)

app.listen(8800, () => {
    console.log('Server is running on port 8800')
})