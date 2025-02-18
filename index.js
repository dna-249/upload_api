const express =require("express");
const cors = require("cors");
const multer = require("multer")
const port = 3000

const app = express()

app.use(cors())
app.get("/",(req,res)=>{
  res.send("hello from backend by DNA")
})

app.listen(port,()=>{
    console.log("server is running")
})