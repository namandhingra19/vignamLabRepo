import { configureStore } from "@reduxjs/toolkit";
import subjectReducer from './subjectStore'
import topicReducer from './topicStore'
const store=configureStore({
    reducer:{
        subjects:subjectReducer,
        topics:topicReducer
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>