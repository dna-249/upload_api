const express =require("express");
const cors = require("cors");
const multer = require("multer")
const port = 3000

const app = express()
const corsConfig = {
    origin : ["https://myshop-dna.vercel.app"],
    credential : true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
        
}

app.options("",cors(corsConfig))
app.use(cors(corsConfig))
app.use(express.json())


const storage = multer.diskStorage({ destination : "image/",
    filename:(req, file, cb)=> {
cb(null,`${file.originalname}`)
}})

app.use("/file", express.static("image/"))
const upload = multer({storage:storage})


app.use(cors())
app.get("/",(req,res)=>{
  res.send("hello from backend by DNA")
})
app.post("/post",upload.single("file"),(req,res)=>{
    console.log(req.file)
})
app.get("/get",(req,res)=>{
    res.send("hello alhamdulillah")
})

app.listen(port,()=>{
    console.log("server is running")
})