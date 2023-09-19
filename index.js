const express=require("express")
const app=express()
const hbs=require("hbs")
const path=require("path")
const port=8000
const viewPath=path.join(__dirname,"../templates/views")
const partialPath=path.join(__dirname,"../templates/partials")
const staticPathcSS=path.join(__dirname,"../css")
const staticPathImage=path.join(__dirname,"../images")
const staticPathJS=path.join(__dirname,"../script")

app.set("views",viewPath)
app.set("view engine","hbs")
app.use("/css",express.static(staticPathcSS))
app.use("/images",express.static(staticPathImage))
app.use("/script",express.static(staticPathJS))
hbs.registerPartials(partialPath)

app.get("/",(req,res)=>{
    res.render("home")
})

app.get("/about",(req,res)=>{
    res.render("about")
})

app.get("/check",(req,res)=>{
    res.render("check")
})

app.get("*",(req,res)=>{
    res.status(404).render("404error")
})

app.listen(port,()=>{
    console.log("Listening from the server side...")
})
