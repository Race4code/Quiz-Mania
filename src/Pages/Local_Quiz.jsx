import {useEffect,useState} from 'react'
// import './Quiz.css'
import {logo,html,css,Link,load_answer,PageNotFound,Question} from '../All_imports.js'
import {useDispatch,useSelector} from 'react-redux'
import gear from '../components/gear.png'

const Quiz = () => {
  const [questions,setquestions] = useState([])
  const dispatch = useDispatch()
  const attempt = useSelector(state=>state.attempt)

  const topic = useSelector(state=>state.topic)
  console.log("load_quiz");
  console.log(topic)
  console.log(attempt);
  useEffect(()=>{
    setTimeout(() => {
      console.log('called')
      switch(topic){
        case "html" : setquestions(html);break
        case "css" : setquestions(css);break
        default :  return <PageNotFound/>
      }
    }, 1000);

  },[])
  
  
  if(questions.length!==0){
    let temp = questions.map((q)=>{
      return {
        id:q.id,
        answer:q.correct
      }
    }
    )
    dispatch(load_answer(temp))
  }


  while(questions.length===0){
    // return <div className='loading'><pre><h1>LOADING...</h1></pre></div>
    return <div className='loading'>
    <img src={gear} alt="logo" width="100px" height="100px"/>
    <div><pre><h1>Loading...</h1></pre></div>
  </div>
  }

 
  
  return (
    <div>
      <div className='header'>
        <img src={logo} alt='logo' height="100px" width="100px" style={{overflow:"hidden"}} />
      </div>
      { 
        questions.map((q)=>{
          return <Question key = {q.id} question={q}/>
        })
      }
      <div className='submit_btn'>
        <button className='btn' ><Link to='/result' style={{textDecoration:"none",color:"white"}}>Submit</Link></button>
      </div>
    </div>
  )
}

export default Quiz;
