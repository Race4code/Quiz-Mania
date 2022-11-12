
import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { Login,select_topic,blob1,blob,Link,category,avatar} from '../All_imports';

const Home = () => {
    const dispatch = useDispatch()
    const [select,setselect]=useState(0)
    const topic = useSelector(state=>state.topic)
   console.log(select);
    const handleClick=(e)=>{
        // console.log(e.target.id)
        if(e.target.id===select){
          e.target.style.backgroundColor= "rgb(153, 95, 24)"
          dispatch(select_topic(""))
          setselect(0)
          return
        }
        if(select===0){
          e.target.style.backgroundColor = "rgb(231, 163, 80)"
        }else{
          document.getElementById(select).style.backgroundColor="rgb(153, 95, 24)"
          e.target.style.backgroundColor = "rgb(231, 163, 80)" 
        }
        const value = e.target.value.toLowerCase()
        dispatch(select_topic(value))
        setselect(e.target.id)
    }

    const login_page = ()=>{
      return <Link to='/login'/>
    }
  return (
    <div>
      {/* Avatar */}
      <div className='avatar'>
        <Link to='/login' style={{textDecoration:"none",color:"rgb(76, 77, 150)"}}>
          <img src={avatar} 
             alt="avatar" 
             width="80px" 
             height="80px" 
             style={{cursor:"pointer"}} 
        /><div>Rahul Kr Singh</div>
        </Link>
      </div>
      {/* Blobs for Home page background */}
      <div className='blob1'>
      <img src={blob1} alt="blob" />
      </div>
      <div className='blob'>
      <img src={blob} alt="blob" />
      </div>
      {/* Website Name */}
      <div className='quiz_page'>
      <div className="text">
        Quiz - Mania
      </div>
      {/* Create your Quiz  */}
      <div className='create_quiz'>
      <Link to='/create' style={{color:'rgb(75, 73, 73)',textDecoration:'none'}}>Create Quiz</Link>
      </div>
      {/* List of Topics */}
      <div className='topics'>
        Select Topics
      </div>
      <div className='select'>
        {
            category.map((q,index)=>{
                return <button id={index+1} key={index}className='category' onClick={handleClick} value={q}>{q}</button>
            })
        }
        {/* Start Quiz Button */}
      </div>
        {topic!=="" && <button className='btn'><Link to='/quiz' style={{color:'rgb(75, 73, 73)',textDecoration:'none'}}>  Start Quiz</Link> </button>}
        {topic==="" && <button className='btn' onClick={()=>{alert("Select Any Topic")}}>Start Quiz</button>}
      </div>
    </div>
  )
}

export default Home;
