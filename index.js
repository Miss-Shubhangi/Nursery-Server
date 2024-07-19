import express from "express"
import dotenv from "dotenv"
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

app.post("/plant" , (req, res)=>{
    const {name,
        category,
        image,
        price,
        description}=req.body

        const randomId = Math.round(Math.random()*1000)

        const newPlant ={
            id:randomId,
            name:name,
            category:category,
            image:image,
            price:price,
            description:description
        }
        plants.push(newPlant)

        res.json(
            {
                success:true,
                data:newPlant,
                message:"New plant added ."
            }
        )
})

app.get("/plants",(req,res)=>{
    res.json(
        {
            success:true,
            data:plants,
            message:"all plants fetched successsfully"
        }
    )
})

app.get("/plant/:id" ,(req,res)=>{
    const {id}=req.params
    const  plant = plants.find((p)=>p.id==id) 
    res.json({
        success:plant?true:false,
        data:plant,
        message:plant?"plant fetched successfully.":"null"
    })
})

app.put("/plant/:id",(req,res)=>{
   const {name,
        category,
        image,
        price,
        description}=req.body

        const {id}=req.params
        let index=-1
        plants.forEach((plantObj ,i)=>{
            if(plantObj.id==id){
                index=i
            }
        })
        const newObj={
            id,
            name,
            category,
            image,
            price,
            description
        }
       if(index==-1){
        return  res.json({
            success:false,
            message :"plant not found",
            data:null
        })
       } else{
        plants[index]=newObj
        res.json({
            success:true,
            data:null,
            message:"plant updated succesfully"
        })}
})

app.delete("/plant/:id", (req, res) => {
    const { id } = req.params;
    let index = -1;

    plants.forEach((plant, i) => {
        if (plant.id == id) {
            index = i; 
        }
    });

    if (index === -1) {
        return res.json({
            success: false,
            message: `Plant not found at id ${id}`
        });
    }

    plants.splice(index, 1); 
    res.json({
        success: true,
        message: "Plant deleted.",
        data: null
    });
});
app.use("*", (req,res)=>{
    res.send(`<div style="text-align: center; color: #333; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; background: linear-gradient(135deg, #f5f7fa, #c3cfe2);">
    <h1 style="font-size: 10em; margin: 0; color: #ff6f61;">404 NOT FOUND</h1>
    <h2 style="font-size: 2em; margin: 0;">Oops! Page not found.</h2>
    <p style="font-size: 1.2em; margin: 20px 0;">The page you're looking for doesn't exist or has been moved.</p>
    </div>
`)
})
const PORT=process.env.PORT

app.listen(PORT , ()=>{
    console.log(`Server is running on Port ${PORT}`)
})