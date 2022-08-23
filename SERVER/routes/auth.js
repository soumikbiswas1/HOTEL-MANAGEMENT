const express=require ("express")
const router=express.Router();

router.get("/",(req,res)=>{
    res.send("<p>Hello World</p>");
});
router.post("/signup",(req,res)=>{
    console.log(req.body.name);
    res.json({
        name: req.body.name,
    })
});
module.exports=router;
