import {React,useEffect,useState} from 'react';
import {useSelector,useDispatch} from 'react-redux'
// import './Result.css'
import {blob,blob1,Link,select_topic,delete_all} from '../All_imports'
import logo from '../components/gear.png'


const Result = () => {
    const ans = useSelector(state=>state.answer)
    const attempt = useSelector(state=>state.attempt)
    const topic = useSelector(state=>state.topic)
    const [score, setscore] = useState(0)
    const dispatch = useDispatch()
   
    // Always run for first time when this component is rendered
    useEffect(() => {
          setTimeout(() => {
            let count=0
            ans.map((q)=>{
            if(q.answer===attempt.get(`${q.id}`)){
               count++
            }
           })
           setscore(count) 
          }, 1500);
            
    }, [])
    if(attempt.size===0){
      return <div className='loading'>
               <pre>
                <h1>ZERO ATTEMPT</h1>
              </pre>
              <button className='back_btn'><Link to='/quiz' style={{textDecoration:"none",color:"white"}}>BACK</Link></button>
            </div>

    }
    while(score===0 && attempt.size!==0){
      // return <div className='loading'><pre><h1>Loading...</h1></pre></div>
      return <div className='loading'>
            <img src={logo} alt="logo" width="100px" height="100px"/>
            <div><pre><h1>Loading...</h1></pre></div>
          </div>
    }

  // Function called when Home button is pressed
  const handleHome = ()=>{
    dispatch(select_topic(""))
  }
  // Function called when Reset Button is pressed
  const handleReset = ()=>{
    dispatch(select_topic(topic))
    dispatch(delete_all())
  }

  return (
    <div>
    <div className='blob1'>
      <img src={blob1} alt="blob" />
      </div>
      <div className='blob'>
      <img src={blob} alt="blob" />
      </div>
    <div className='cntnr'>
        <div >
          <div className='logo_gear'>
            <h1 className='text'>Result</h1>
            {/* <img src={logo} alt="logo" width="100px" height="100px"/> */}
          </div>
            <h3 className='txt'><pre>Total Questions : {ans.length}</pre></h3><br/>
            <h3 className='txt'><pre>You Score is        : {score}</pre></h3><br/>
            <h3 className='txt'><pre>Attempted           : {attempt.size}</pre></h3><br/>
            <h3 className='txt'><pre>Unattempted      : {ans.length-attempt.size}</pre></h3><br/>
            <span >
              <button className='btn'  onClick={handleReset} style={{marginRight:"20px"}} >
                <Link to='/quiz' style={{textDecoration:"none",color:"white"}}>
                  Reset
                </Link>
              </button>
              <button className='btn'onClick={handleHome}>
                <Link to='/' style={{textDecoration:"none",color:"white"}}>
                  Home
                </Link>
              </button>
            </span>
        </div>
    </div>
    </div>
  );
}

export default Result;
