const express = require('express');
const { addBlog, showBlog, deleteBlog, editBlog, editform } = require('../controller/blogController');

const brouter=express.Router();

brouter.get("/addBlog",(req,resp)=>{
    resp.render("add");
})

brouter.post("/addBlog",addBlog);

brouter.get("/showBlog/:id",showBlog)
brouter.delete("/delete/:id",deleteBlog)

brouter.get("/editBlog/:id",editform)
brouter.patch("/editBlog/:id",editBlog)

module.exports=brouter