import { createSlice } from "@reduxjs/toolkit";
import { ChaptersDTO } from "../models/ChaptersDTO";


const initialState:ChaptersDTO={
    subject_name:'',
    class_name:'',
    chapters:[]
}

export const subject=createSlice({
    name:'subject',
    initialState:initialState,
    reducers:{
        setChapter(state,actions){
            state.subject_name=actions.payload.subject_name,
            state.class_name=actions.payload.class_name,
            state.chapters=actions.payload.chapters
        }
    }
})

export default subject.reducer