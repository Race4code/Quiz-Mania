import {createSlice} from '@reduxjs/toolkit'
import { enableMapSet } from 'immer'
enableMapSet()



const AttemptSlice = createSlice({
    name:"Attempt",
    initialState:new Map(),
    reducers:{
        add:(state,actions)=>{
            state.set(actions.payload[0],actions.payload[1])
            // state.push(actions.payload)
        },
        remove:(state,actions)=>{
            // return state.filter((item)=>item.id!==actions.payload)
            state.delete(actions.payload)
        },
        delete_all:(state,actions)=>{
            state.clear()
        }

    }
})

export const {add,remove,delete_all} = AttemptSlice.actions
export default AttemptSlice.reducer