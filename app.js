const express = require("express")
const app = express()
const Port = process.env.Port || 4000
app.use(express.static('public'))
app.listen(Port, () => {
    console.log("singhaniya")
})
app.get("/",(req,res)=>{
    res.send(index.html)
})
app.get("/bikash",(req,res)=>{
    res.send("welcome to singhaniya")
})