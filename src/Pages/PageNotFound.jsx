import React from 'react';
// import './PageNotFound.css'
import {useSelector,useDispatch} from 'react-redux'
import {select_topic,Link} from '../All_imports.js'


const PageNotFound = () => {
    const topic = useSelector(state=>state.topic)
    const dispatch = useDispatch()
    const handleClick = ()=>{
        dispatch(select_topic(""))
    }

    return (
        <div className='Quiz_not_found'><h1>{`${topic.toUpperCase()} `}
           QUIZ MAKING IS UNDER PROCESS PLEASE TRY AFTER SOMETIME
           </h1><br/>
           <Link to='/'>
              <button className='back_btn'
                onClick={handleClick}
              >HOME PAGE</button>
            </Link>
        </div>
    )
}

export default PageNotFound;
