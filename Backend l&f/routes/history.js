const router = require("express").Router();
const mongoose = require("mongoose")
const dbs=require("mongodb")


const historySchema= new mongoose.Schema({
    
    itemName:{
        type:String,
        required:true
    },
   returnDate:{
        type:String,
        required:true
    },
   returnedBy:{
        type:String,
    },
    userEmail:{
        type:String,
    }
   
})

const itemModel=mongoose.model('history',historySchema)



router.post('/foundItems',(req,res)=>{
    itemModel.create({
        itemName:req.body.name,
        returnDate:req.body.returnDate,
        returnedBy:req.body.returnedBy,
        userEmail:req.body.userEmail
    })
    res.status(200).json({message:"data stored successfully"});
})



router.get('/foundItems',async (req,res)=>{
    const items=await itemModel.find()
    console.log(items)
    res.status(200).json({item:items[0]})
})





module.exports=router