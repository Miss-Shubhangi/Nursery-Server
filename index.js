import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import { getHealth } from "./controllers/health.js"
import {
    postPlant,
    getPlant, 
    getPlantId,
    putPlantId,
    deletePlant
} from "./controllers/plant.js"
import { pageNotFound } from "./controllers/another.js"


dotenv.config()
const app = express()
app.use(express.json())

const dbConnection = async ()=>{
    const conn= await mongoose.connect(process.env.MONGO_URL)
    if (conn){
        console.log(`Database Connected 🔗🎁`)
    }
    else{
        console.log("Database Not Connected ⛓️‍💥❌")
    }
}
dbConnection()

const plants =[]

app.get("/health", getHealth)

app.post("/plant" , postPlant)

app.get("/plants",getPlant)

app.get("/plant/:id" , getPlantId)

app.put("/plant/:id",putPlantId)

app.delete("/plant/:id", deletePlant);
app.use("*", pageNotFound)

const PORT=process.env.PORT

app.listen(PORT , ()=>{
    console.log(`Server is running on Port ${PORT}`)
})