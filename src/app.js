const express = require("express")
const path = require("path")

const publicPath = path.join(__dirname,"../public")

console.log(publicPath);

const port = process.env.PORT || 3001;
const app = express()


app.get("/",(req, res)=>{
    
    res.sendFile(path.join(__dirname, "views", "home.html"))
})

app.get("/register",(req, res)=>{
    
    res.sendFile(path.join(__dirname, "views", "register.html"))
})

app.get("/login",(req, res)=>{
    
    res.sendFile(path.join(__dirname, "views", "login.html"))
})

app.use(express.static(publicPath))
app.listen(port, ()=>console.log("listening port"+ port))