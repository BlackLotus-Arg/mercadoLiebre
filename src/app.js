const express = require("express")
const path = require("path")

const publicPath = path.join(__dirname,"public")
const port = process.env.PORT || 3001;
const app = express()


app.get("/",(req, res)=>{
    res.sendFile(path.join(__dirname, "views", "home.html"))
})


app.use(express.static(publicPath))
app.listen(port, ()=>console.log("listening port"+ port))