const mongoose=require('mongoose');
const questionSchema=new mongoose.Schema({
    question:String,
    userId:String,
    answers:Array
});
module.exports=mongoose.model("questions",questionSchema);