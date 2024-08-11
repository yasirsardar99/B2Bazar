require('dotenv').config()

const express = require("express");

const app = express();

app.get("/", (req, res)=>{
    res.json("msg: wellcome to the app" )
})

app.listen(process.nextTick.PORT, ()=>{
    console.log("port" , process.env.PORT ,"is literally successful")
})