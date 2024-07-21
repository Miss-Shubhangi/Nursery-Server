import Plant from "./../models/Plant.js";

const postPlant=async (req, res)=>{
    const {name,
        category,
        image,
        price,
        description}=req.body

       const newPlant=new Plant({
        name:name,
        category:category,
        image:image,
        price:price,
        description:description
       })

       const savedPlant = await newPlant.save();

        res.json(
            {
                success:true,
                data:savedPlant,
                message:"New plant added ."
            }
        )
}

const getPlant=(req,res)=>{
    res.json(
        {
            success:true,
            data:plants,
            message:"all plants fetched successsfully"
        }
    )
}

const getPlantId=(req,res)=>{
    const {id}=req.params
    const  plant = plants.find((p)=>p.id==id) 
    res.json({
        success:plant?true:false,
        data:plant,
        message:plant?"plant fetched successfully.":"null"
    })
}

const putPlantId=(req,res)=>{
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
 }

 const deletePlant= (req, res) => {
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
}


export {
    postPlant,
    getPlant, 
    getPlantId,
    putPlantId,
    deletePlant
}