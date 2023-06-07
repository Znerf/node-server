
const express = require('express')
const cors = require("cors");
const mongoose= require("mongoose")


//instantialiting express app and variables
const app= express()
const port=4001;

app.use(express.json());
app.use(cors())

app.get("/",(req,res)=>{
    console.log(req)
    res.send("App is running")
})

const todoRoutes = require("./routes/todoRoutes")   
app.use("/todos", todoRoutes)  //assign Todo routes to our express application


mongoose.connect("mongodb://localhost/nodeserver")
.then(()=>{
    
    app.listen(port, ()=>{
        console.log(`Server running on http://localhost:${port}`)
    })
    console.log("Mongodb Database connected")
})
.catch((e)=>{
    console.log("error::",e)
})





