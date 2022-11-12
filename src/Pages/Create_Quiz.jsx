import React,{useState} from 'react';
// import './Create_Quiz.css'
import {blob,blob1} from '../All_imports'
import './Create_Quiz.css'

const Create_Quiz = () => {
  const [quizObj,setQuizObj] = useState([])
  let [quiz_name,setquiz_name] = useState("");
  let [flag,setFlag]  = useState(false);
  console.log(quizObj)
  let temp_quiz_name=""
  const [id,setid] = useState(1);
  // handle add button
  const handleAdd = (e)=>{
    for(let i=0;i<=9;i++){

    }
    e.preventDefault()
    console.log(e)
    let temp={}
    let ques = e.target[0].value
    temp["id"] = id
    temp["question"] = ques
    let arr = []
    let tempobj={}
    for(let i=1;i<=4;i++){
      tempobj[`${i}`]=e.target[i].value
    }
    arr=tempobj
    temp["options"]=arr
    for(let i=5;i<=8;i++){
      if(e.target[i].checked===true){
        temp["correct"]=e.target[i-4].value
        break;
      }
    }
    setQuizObj((prev)=>{
      return [...prev,temp];
    })
    setid(id+1)
  }
  // handle Next Button
  const handleNextBtn = (e)=>{
    
    flag=true;
    setquiz_name((pre)=>`${pre}${temp_quiz_name}`)
    setFlag(!flag)
    alert(e);
  }
  // handle quiz_name input
  const handleQuizName = (e)=>{
    
  }
  console.log(flag)
  // Handle Preview
  const handlePreview = ()=>{

  }
  // Handle Submit
  const handleFinalSubmit=()=>{

  }
  return (
    <div>
      <div className='blob1'>
      <img src={blob1} alt="blob" />
      </div>
      <div className='blob'>
      <img src={blob} alt="blob" />
      </div>
      <div className='create-own-quiz'>
        Create-Quiz
        {/* {!flag && <div><input type="text" placeholder="quiz-Name" onChange={handleQuizName}/>
        <button className='btn' onClick={handleNextBtn}>Next</button>
        </div>
        } */}
      </div>
      <div className='form'>
        <form className='inner-form' onSubmit={handleAdd}>
          <div className='flex'> 
          <label>Quiz-Name</label>
          <input type="text" className='que-options' required="true" placeholder='Quiz-Name'/>
          </div>
          <label>Question {id}.</label>
          <input type="text" required="true" placeholder='What is HTML?'/>
         <div className='flex'> 
          <label>Option A</label>
          <input type="text" className='que-options' required="true" placeholder='option a'/>
          </div>
          <div className='flex'>
          <label>Option B</label>
          <input type="text" className='que-options' required="true" placeholder='option b'/>
          </div>
          <div className='flex'>
          <label>Option C</label>
          <input type="text" className='que-options' required="true" placeholder='option c'/>
          </div>
          <div className='flex'>
          <label>Option D</label>
          <input type="text" className='que-options' required="true" placeholder='option d'/> 
          </div>
          <div className='flex'>
          <label>Correct option</label>
          <div>
          A<input type="radio" name="correct" required="true" className='que-options radio' placeholder='a'/> 
          B<input type="radio" name="correct" required="true"  className='que-options radio' placeholder='b'/>
          C<input type="radio" name="correct" required="true"  className='que-options radio' placeholder='c'/>
          D<input type="radio" name="correct" required="true"  className='que-options radio' placeholder='d'/>
          </div>
          </div>
          <input type="submit" className='add-btn' value="+"/>
        </form>
        <div className='create-quiz-btn'>
          <button className='btn' onClick={handlePreview}>Preview</button>
          <button className='btn' onClick={handleFinalSubmit}>Submit</button>
        </div>
      </div>

    {/* <div className='create'>
       <h1>UNDER CONSTRUCTION STAY TUNED...</h1>
       <button className='back_btn'>
        <Link to='/' style={{textDecoration:"none",color:"white"}}>
          HOME PAGE
        </Link>
        </button>
    </div> */}
    </div>
  );
}

export default Create_Quiz;
