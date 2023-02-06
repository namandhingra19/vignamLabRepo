import { createSlice } from "@reduxjs/toolkit";
import { TopicDTO } from "../models/TopicDTO";


const initialState:TopicDTO={
    _id:'',
    title:'',
    theory:'',
    simulation:'',
    askDoubt:'',
    Questions:''
}

export const topic=createSlice({
    name:'topic',
    initialState:initialState,
    reducers:{
        setTopic(state,actions){
            state._id=actions.payload._id,
            state.title=actions.payload.title,
            state.theory=actions.payload.theory,
            state.askDoubt=actions.payload.askDoubt,
            state.simulation=actions.payload.simulation,
            state.Questions=actions.payload.Questions
        }
    }
})

export default topic.reducer