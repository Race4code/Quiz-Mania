import {createSlice} from '@reduxjs/toolkit'

const AnswerSlice = createSlice({
    name:"anser",
    initialState:[],
    reducers:{
        load_answer:(state,actions)=>{
           return state = actions.payload
        }
    }
})

export const {load_answer} = AnswerSlice.actions
export default AnswerSlice.reducer