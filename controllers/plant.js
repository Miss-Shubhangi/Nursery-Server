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

const getPlant= async (req,res)=>{

    const allPlants=await Plant.find().sort({createdAt:-1})
    res.json(
        {
            success:true,
            data:allPlants,
            message:"all plants fetched successsfully"
        }
    )
}

const getPlantId=async (req,res)=>{
    const {id}=req.params
     const plant = await Plant.findOne({
        _id : id
     })
    res.json({
        success:plant?true:false,
        data:plant || null,
        message:plant?"plant fetched successfully.":"null"
    })
}

const putPlantId=async (req,res)=>{
    const {name,
         category,
         image,
         price,
         description}=req.body
 
         const {id}=req.params
         const updateResult = await Plant.updateOne({_id : id},{$set:{
            name:name,
            category:category,
            image:image,
            price:price,
            description:description
         }})
         res.json({
            success:true,
            message:"plant updated successfully.",
            data:updateResult
         })
      
 }

 const deletePlant= async(req, res) => {
    const { id } = req.params;
    await Plant.deleteOne({
        _id : id
    })
    res.json({
        success:true,
        message:"Plant deleted successfully.",
        data:null
    })
}


export {
    postPlant,
    getPlant, 
    getPlantId,
    putPlantId,
    deletePlant
}