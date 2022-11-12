import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import { Provider } from 'react-redux';
import {Login,Home,Local_Quiz,Result,Store,Create_Quiz} from './All_imports.js'
import './App.css'

const App = () => {
  return (
    <Provider store = {Store}>
    <Router>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path="/" element={<Home />}/>
            {/* <Route path="/quiz" element={<Quiz/>}/> */}
            <Route path="/quiz" element={<Local_Quiz/>}/>
            <Route path="/create" element={<Create_Quiz/>}/>
            <Route path="/result" element={<Result/>}/>

        </Routes>
    </Router> 
    </Provider>
  );
}

export default App;
