import { SubjectDTO } from "../../models/ClassesDTO"
import {Link, Route, Routes, useNavigate} from 'react-router-dom';
import { Fragment, useState } from "react";
import  { redirect } from 'react-router-dom'
import App from "../../App";
import style from './SingleSubject.module.css'

export const SingleSubject:React.FC<{subject:SubjectDTO,class_id:string}>=(props)=>{
    const navigate = useNavigate();
    const [click,setClick]=useState(false);
    const clickHandler=()=>{
        navigate(`/${props.class_id}/${props.subject.id}`);
        window.location.reload();
    }
    return(
        <Fragment>
        <div className={`px-3 py-2 h6 ${style.insideMenu}`}onClick={clickHandler} style={{cursor:'pointer'}}>
            {props.subject.title}
        </div>
        {
            click &&
            <Routes>
                <Route path={`${props.class_id}/${props.subject.id}`} element={<App/>}></Route>
            </Routes>
        }
        </Fragment>
    )
}