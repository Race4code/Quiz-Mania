import blob from './Assets/blob.png'
import blob1 from './Assets/blob1.png'
import logo from './Assets/quiz_logo.png'
import Home from './Pages/Home'
import Quiz from './Pages/Quiz'
import Local_Quiz from './Pages/Local_Quiz'
import Create_Quiz from './Pages/Create_Quiz'
import Store from './Store/Store.js'
import Result from './Pages/Result'
import html from './Questionset/html'
import css from './Questionset/css'
import {Link} from 'react-router-dom'
import PageNotFound from './Pages/PageNotFound'
import Question from './components/Question'
import { load_answer } from './Store/AnswerSlice'
import {select_topic} from './Store/TopicSlice'
import {delete_all} from './Store/AttemptSlice'
import category from './question';
import avatar from './Assets/avatar.png'
import Login from './Pages/Login'



export {
    Login,
    blob,
    blob1,
    logo,
    Home,
    Quiz,
    Local_Quiz,
    Store,
    Create_Quiz,
    Result,
    html,
    css,
    Link,
    PageNotFound,
    Question,
    load_answer,
    select_topic,
    delete_all,
    category,
    avatar
}