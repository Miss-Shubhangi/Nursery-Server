import express from "express"

const app = express()
app.use(express.json())

const plants =[{
    "id":1,
    "name":"bamboo tree",
    "category":"indoore",
    "price":100,
    "image":"data:image/jpeg;base64,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",
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
const PORT=5000

app.listen(PORT , ()=>{
    console.log(`Server is running on Port ${PORT}`)
})