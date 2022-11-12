import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {add,remove} from '../Store/AttemptSlice'


const Question = ({question}) => {

    const [pre,setpre] = useState(0)
    const dispatch = useDispatch()
    console.log("question")
    console.log(pre)
    const handleClick = (e)=>{  
      e.preventDefault()
        if(e.target.id===pre){
            // e.target.style.backgroundColor="rgb(218, 213, 213)"
            e.target.style.backgroundColor="rgb(218, 213, 213)"

            const value = e.target.value.split(',')
            dispatch(remove(value[0]))
            setpre(0)
        }else{
          if(pre!==0){
            document.getElementById(pre).style.backgroundColor="rgb(218, 213, 213)"
          }
            e.target.style.backgroundColor="rgb(157, 157, 197)"
            const value = e.target.value.split(',')
            dispatch(add([value[0],value[1]]))
            setpre(e.target.id)
        }
      }


  return (
    <div className='container'>
        <div className='quest'>
            <p>{question.id}{`. ${question.question}`}</p>
        </div>
        <div className='options'>
              {
                question.options.map((key,index)=>{
                  const k = Object.keys(key)
                  return <div key={index}><button 
                           className='opt'
                           id={`${question.id}${index+1}`}
                           value={[question.id,key[k]]}
                           onClick = {handleClick}
                          >
                           {key[k]}
                         </button>
                         </div>
                })
              }
            </div>
    </div>
  )
}

export default Question;
