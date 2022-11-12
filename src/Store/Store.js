import {configureStore} from '@reduxjs/toolkit'
import AttemptReducer from './AttemptSlice'
import QuestionsSlice from './QuestionsSlice'
import TopicSlice from './TopicSlice'
import AnswerSlice from './AnswerSlice'
import {getDefaultMiddleware} from '@reduxjs/toolkit'


const store = configureStore({
    reducer:{
        attempt:AttemptReducer,
        questions:QuestionsSlice,
        topic:TopicSlice,
        answer:AnswerSlice
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
     serializableCheck:false,
    }),
})

export default store