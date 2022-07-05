const router = require("express").Router();
const mongoose = require("mongoose")
const dbs=require("mongodb")


const lostSchema= new mongoose.Schema({
    
    itemName:{
        type:String,
        required:true
    },
   userEmail:{
        type:String,
        required:true
    },
   contact:{
        type:String,
    },
    tag:{
        type:String,
        required:true
    },
    imgUrl:{
        type:String,
        required:true
    },
    at:{
        type:String,
        required:true 
    }
   
})

const itemModel=mongoose.model('item',lostSchema)



router.post('/lostItems',(req,res)=>{
    itemModel.create({
        itemName:req.body.name,
        userEmail:req.body.email,
        contact:req.body.contact,
        tag:req.body.tag
    })
    res.status(200).json({message:"data stored successfully"});
})



router.get('/lostItems',async (req,res)=>{
    const items=await itemModel.find()
    console.log(items)
    res.status(200).json({item:items[0]})
})

router.delete('/lostItems',async (req,res)=>{
    const tag=req.body.tag;
    const item=await itemModel.find({tag})
    
    await item[0].remove();
    res.status(200).json({message:"data deleted successfully"})
})




module.exports=router