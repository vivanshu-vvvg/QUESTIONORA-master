import { useState } from "react";
const AskQuestions=()=>{
    const askHandle=async()=>{
        if(!question){
            alert("Enter Question first");return ;
        }
        const userId=JSON.parse(localStorage.getItem("user"))._id;
        console.warn(JSON.stringify({question,userId}));
        let result=await fetch("http://localhost:5000/askq",{
            method:"post",
            body:JSON.stringify({question,userId}),
            headers:{
                "Content-Type":"application/json"
            }
        })
        //result=await result.json();
        alert("Question Submitted Successfully")
        //console.warn(result);
    }
    const [question,setQuestion]=useState('');
    return (<div className="askQ">
        <form>
            <input className="inputBox-b" placeholder="Ask Question" stype="text" value={question} onChange={(e)=>{setQuestion(e.target.value)}}/>
            <button className="appbutton" onClick={askHandle}>Ask</button>
        </form>
    </div>)
}
export default AskQuestions;