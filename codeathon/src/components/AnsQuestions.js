import React,{useEffect,useState} from 'react';

const AnsQuestions=()=>{
        const [questions,setQuestions]=useState([]);
        let [answer,setAnswer]=useState([]);
        useEffect(()=>{
            getQuestions();
            answer=new Array(questions.length);
        },[]);
        const getQuestions=async ()=>{
            var result=await fetch('http://localhost:5000/questions');
            result =await result.json();
            setQuestions(result);
            //console.warn(result);
            
        }
        const uploadAnswer=async (id,index)=>{
            await fetch(`http://localhost:5000/questions/${id}`,{
                method:'put',
                body:JSON.stringify({answer:answer[index]}),
                headers:{
                    'Content-Type':"application/json"
                }
            });
            //result= await result.json();
            //console.warn(result);
            alert("Your Answer Successfully submitted");

        }
    return(
        <div className='question-list'>
            {questions.length>0 ? questions.map((item,index)=>
                     <ul key={item._id}>
                <li >{item.question}</li>
                <input placeholder="Answer here" className='inputBox-b' type="text" value={answer[index]} onChange={(e)=>{answer[index]=e.target.value;}}/>
                <button className='appbutton' onClick={()=>{uploadAnswer(item._id,index)}}>Submit</button>
                <br/>Other Answers
                {item.answers.map((ans)=>{
                   return <li key={ans}>{ans}</li>
                })}
            </ul>
                ):<h1>No Result Found</h1>
            }
        </div>)
}
export default AnsQuestions;