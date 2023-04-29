const express=require('express');
const cors=require("cors");
require('./db/config');
const User=require('./db/User');
const Question=require("./db/Question");
const app=express();
app.use(express.json());
app.use(cors());
app.post("/register",async (req,res)=>{
    const user=new User(req.body);
    let result=await user.save();
    result=result.toObject();
    delete result.password;
    //console.log("great");
    res.send(result);
})
app.post("/login",async (req,res)=>{
    //let user=await User.findOne(req.body).select("-password");//you can use this also
    if(req.body.password && req.body.email){
        let user=await User.findOne(req.body,{}, { projection: { password:0} });
    if(user){
        res.send(user);
    }else{
        res.send({result:"No User Found"});
    }
    }else{
        res.send({result:"No User Found"});
    }
})
app.post("/askq",async (req,res)=>{
    let question=new Question(req.body);
    let result=await question.save();
    res.send(result);
})
app.get("/questions",async (req,res)=>{
    let questions=await Question.find();
    //console.log(questions)
    if(questions.length>0){
        res.send(questions);
    }else{
        res.send({result:"No Products Found"});
    }
});
app.put("/questions/:id",async(req,res)=>{
    //console.log(req.body);
    let result=await Question.updateOne(
        {_id:req.params.id },{
            $push:{
                answers:
                req.body.answer
            }
        }) 
        res.send(result);
});
app.get("/questions/:id",async (req,res)=>{
    //console.log(req.params.id);
    let questions=await Question.find({userId:req.params.id});
    
    //console.log(questions)
    if(questions.length>0){
        res.send(questions);
    }else{
        res.send({result:"No Products Found"});
    }
});
app.listen(5000);