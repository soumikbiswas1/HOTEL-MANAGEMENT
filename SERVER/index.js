const express= require('express');
const app = express();
const mongoose=require("mongoose");

const {MONGOURL} = require("./value.js")
require("./models/user")


const PORT=3000;
mongoose.connect(MONGOURL);
require("./models/user")
//mongoose.model("userSchema")

app.use(require("./routes/auth"));
app.use(require("./routes/hotels"));

mongoose.connection.on("connected",()=>{
    console.log("We are connected to mongodb");
});
mongoose.connection.on("error",()=>{
    console.log("We are not connected to mongodb");
})

app.listen(PORT,function(){

    console.log("The Server is Started");
});
//TQ9g7j2UzTZF3QVs     password
//mongodb+srv://SoumikBiswas:<password>@cluster0.d0msb.mongodb.net/?retryWrites=true&w=majority
//middlewares



app.use((req,res,send)=>{
    res.send("Hello from middleware");
    
})

app.get("/",function(request,response){   
    response.send("This is a server");
});
