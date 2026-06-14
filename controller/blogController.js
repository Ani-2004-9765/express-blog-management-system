const blodModel = require("../model/Blog");

const addBlog= async(req,resp)=>{
try {
    const {title,img,desc}=req.body;
    await blodModel.create({title,img,desc});
    resp.redirect("/dashboard")
} catch (error) {
    console.log(error);
}
}



const showBlog = async (req,resp)=>{
    try {
        const data = await blodModel.findById(req.params.id)
        resp.render("show",{data})
    } catch (error) {
        console.log(error);
        
    }
}

const deleteBlog = async (req,resp)=>{
    try {
        const data = await blodModel.findByIdAndDelete(req.params.id)
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
        
    }
}

const editform = async (req,resp)=>{
    try {
        const data = await blodModel.findById(req.params.id)
        resp.render("edit",{data})
    } catch (error) {
        console.log(error);
        
    }
}

const editBlog = async (req,resp)=>{
    try {
        const data = await blodModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        resp.redirect("/dashboard")
    } catch (error) {
        console.log(error);
        
    }
}





module.exports={addBlog,showBlog,deleteBlog,editBlog,editform}