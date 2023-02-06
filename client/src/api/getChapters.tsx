import { useState } from "react";

export const getChapters=async (class_id:string,subject_id:string,sendRequest:any,dispatchData:any)=>{
    sendRequest({
        url:`http://localhost:5000/${class_id}/${subject_id}`
    },dispatchData)
}