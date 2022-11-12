import {createSlice} from '@reduxjs/toolkit'

const TopicSlice = createSlice({
    name:"topic",
    initialState:"",
    reducers:{
        select_topic:(state,actions)=>{
            // console.log(actions.payload)
            return state = actions.payload
        }
    }
})

export const {select_topic} = TopicSlice.actions
export default TopicSlice.reducer

// export const {load_question} = QuestionsSlice.actions
// export default QuestionsSlice.reducer