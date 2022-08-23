//import { router } from "express";

const express=require("express");
const hotel = require("../models/hotel.js");
const router=express.Router();

//create
router.post("/",async (req,res)=>{

    const newHotel = new hotel(req.body)

    try{
        const savedHotel = await newHotel.save();
        res.status(200).json(savedHotel)
    }catch(err){
        res.status(500),json(err)
    }
})
//UPDATE
router.put("/",async (req,res)=>{
      try{
        const updatedHotel = await hotel.findByIdAndUpdate(req.params.id, { $set: req.body},{new:true})
        res.status(200).json(updatedHotel);
    }catch(err){
        res.status(500),json(err)
    }
})
//DELETE
router.delete("/",async (req,res)=>{
    try{
        await hotel.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been deleted");
    }catch(err){
        res.status(500),json(err)
    }
})

//GET
router.get("/:id",async (req,res)=>{
    try{
        const hotel = await hotel.findById(req.params.id)
        res.status(200).json(hotel);
    }catch(err){
        res.status(500),json(err)
    }
})
//GETALL
router.get("/",async (req,res,next)=>{
    console.log("hi,I am a Hotel Route")
    return next();
    try{
        const hotels = await hotel.find();
        res.status(200).json(hotels);
    }catch(err){
        res.status(500),json(err)
    }
})

module.exports=router;