import {useEffect, useState} from 'react';
const YourQuestions=()=>{
    const [questions,setQuestions]=useState([]);
    useEffect(()=>{
        const userId=JSON.parse(localStorage.getItem("user"))._id;
        getQuestions(userId);
    },[])
    const getQuestions=async(id)=>{
        var result=await fetch(`http://localhost:5000/questions/${id}`);
        result =await result.json();
        //console.warn(result);
        setQuestions(result);
        //console.warn(questions);
    }
    return(
        <div className="userQue">
            <ul>
                {questions.length>0?questions.map((que)=>{
                    return <ul key={que._id}>
                        <h3>{que.question}</h3>
                        
                            {que.answers.length>0?
                                que.answers.map((ans)=>{
                                    return <li key={ans}>{ans}</li>
                                }):<h4>Not answered Yet</h4>
                            }
                        </ul>
                }):<h2>You have asked No Question Yet</h2>}
            </ul>
        </div>)
}
export default YourQuestions;