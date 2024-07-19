import express from "express"
import dotenv from "dotenv"

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

const plants =[{
    "id":1,
    "name":"bamboo tree",
    "category":"indoore",
    "price":100,
    "image":"data:image/jpeg;baseAAAAAAAAAAAAAAA//2Q==",
    "description":"indore bambo plant"

}, {
    "id":4,
    "name":"mango tree",
    "category":"outdoore",
    "price":150,
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5myE2YdOgpTEHrlvrFdkPOYsZwZ5K7_AcQ&s",
    "description":"outdoore mango plant "

},{
    "id":8,
    "name":"rose tree",
    "category":"indoore",
    "price":150,
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5myE2YdOgpTEHrlvrFdkPOYsZwZ5K7_AcQ&s",
    "description":"rose plant "

},{
    "id":3,
    "name":"sunflower tree",
    "category":"outdoore",
    "price":150,
    "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc5myE2YdOgpTEHrlvrFdkPOYsZwZ5K7_AcQ&s",
    "description":"outdoore sunflower plant "

}]

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