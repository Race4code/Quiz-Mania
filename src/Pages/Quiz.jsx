import {react,useEffect,useState} from 'react'
// import './Quiz.css'
import logo from '../components/gear.png'
import {useDispatch,useSelector} from 'react-redux'
import {add,remove} from '../Store/AttemptSlice'

const Quiz = () => {
  const [questions,setquestions] = useState([]) 
  const dispatch = useDispatch()
  const attempt = useSelector(state=>state.attempt)
  const que=[] // question array
  const ans = []       // answers array with id
  let color = "grey"
  const topic = useSelector(state=>state.topic)

  useEffect(()=>{
    fetch(`https://quizapi.io/api/v1/questions?apiKey=BHfGw7CJSzHgJs4Ioj7EWmjNTVHOQWAdxnfff7ZN&category=${topic}&limit=10`)
    .then(data=>data.json())
    .then(data=>{
      data.map((obj,index)=>{
        let temp_obj ={}
        temp_obj["id"]=index
        temp_obj["question"]=obj.question
        let opt_obj=[]
        let object={}
        for(var opt in obj.answers){
          object={}
          if(obj.answers[opt]!==null){
             object[opt] = obj.answers[opt]
             opt_obj.push(object)
          }
        }
        temp_obj["options"]=opt_obj
        que.push(temp_obj)
        let ans_key
        for(var key in obj.correct_answers){
          if(obj.correct_answers[key]==="true"){
            key = key.slice(0,8)
            ans_key=key
            break  
          }
        }
        let temp_ans={}
        temp_ans["id"]=index
        temp_ans["correct"]=obj.answers[ans_key];
        ans.push(temp_ans)
      })
      setquestions(que)
      return null
    })
},[])

  while(questions.length===0){
    return <h1>Loading...</h1>
  }
  let pre
  // handle click submit
  const handleClick = (e)=>{   
    let index = e.target.id
    // console.log(index);
    // e.target.style.backgroundColor = c 
    const value = e.target.value.split(',')
    dispatch(add([value[0],value[1]]))
  }
  const handleDbClick=()=>{
    console.log("dbClicked");
  }
  
  const handleSubmit = ()=>{
    console.log("handle")
  }

  return (
    <div>
      <div className='header'>
        <img src={logo} alt='logo' height="80px" width="80px"/>
        <span>Quizz</span>
      </div>
      { 
        questions.map((q)=>{
          return<div key={q.id}><div className='quest'><p>
            {`Q.${q.id+1}  ${q.question}`}</p><br/>
            </div>
            <div className='options'>
              {
                q.options.map((key,index)=>{
                  const k = Object.keys(key)
                  return <div key={index}><button 
                           className='opt'
                           id={`${q.id}${index+1}`}
                           value={[q.id,key[k]]}
                           onClick = {handleClick}
                          >
                           {key[k]}
                         </button>
                         </div>
                })
              }
            </div>
            {/* <button
               id={`${q.id}4`}
               className='opt'
               style={{backgroundColor:{color}}}  
               onClick={handleClick} 
               onDoubleClick={handleDbClick} 
               value={[q.options['answer_d'],q.id]}
              >
                 {q.options['answer_d']}
            </button> */}
          </div>
        })
      }
      <div className='submit_btn'>
        <button className='btn' onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  )
}

export default Quiz;
