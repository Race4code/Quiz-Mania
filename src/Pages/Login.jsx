import React from 'react';
import {avatar} from '../All_imports'
import './Login.css'
const Login = () => {
  return (
    <div className='user-dashboard'>
      <img src={avatar} width="100px" height="100px"/>
      <p>Name</p><hr/>
      <div className='dashboard-nav'>
        <h3>Test History</h3>
        <h3>Performance</h3>
        <h3>Your Quiz</h3>
      </div>
    </div>
  );
}

export default Login;
