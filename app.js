const express = require("express");
const app= express();

const date= require(__dirname + "/date.js")

app.set("view engine", "ejs");

const bodyParser= require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

const items= ["Buy","Eat","Sleep"];

app.get("/", function(req,res){
    
    const day = date.getDate();

    res.render("list", {listTitle : day, listItems : items});

})

app.post("/", function(req,res){
    item= req.body.newItem;
    items.push(item);

    res.redirect("/");
})

app.listen(3000, function(){
    console.log("Server started on port 3000");
})