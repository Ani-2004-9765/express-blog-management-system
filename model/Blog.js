const mongoose = require('mongoose');
const blogSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    img:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    authorName:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
},{timestamps:true}
)
const blodModel=mongoose.model("user",blogSchema)
module.exports=blodModel;