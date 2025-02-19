const express =require("express");
const cors = require("cors");
const multer = require("multer")
const port = 3000

const app = express()
const corsConfig = {
    origin : ["*"],
    credential : true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        
}

app.options("",cors(corsConfig))
app.use(cors(corsConfig))
app.use(express.json())


const storage = multer.diskStorage({ destination : "uploads/",
    filename:(req, file, cb)=> {
cb(null,`${file.originalname}`)
}})

app.use("/file", express.static("uploads/"))
const upload = multer({storage:storage})


app.use(cors())
app.get("/",(req,res)=>{
  res.send("hello from backend by DNA")
})
app.post("/post",upload.single("file"),(req,res)=>{
    console.log(req.file)
})
app.get("/get",(req,res)=>{
    res.sent("hello alhamdulillah")
})

app.listen(port,()=>{
    console.log("server is running")
})