import {createSlice} from '@reduxjs/toolkit'
import questions from '../option.js'
const QuestionsSlice = createSlice({
    name:"Questions",
    initialState:questions,
    reducers:{
        load_question:(state,actions)=>{
            return state=questions
        }
    }
})

export const {load_question} = QuestionsSlice.actions
export default QuestionsSlice.reducer