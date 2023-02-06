import { SingleClass } from "./utils/SingleClass"
import style from './ClassesList.module.css'
import React, { Fragment, useEffect, useState } from "react"
import useHttp from "../hooks/use-http";
import { getClasees } from "../api/getClasses";
import { ClassesDTO } from "../models/ClassesDTO";
export const ClassesList=()=>{
    const [currentClass,setCurrentClass]=useState('');
    const [classes,setClasses]=useState<ClassesDTO[]>();
    const{sendRequest,isLoading,error}=useHttp();
    useEffect(()=>{
        getClasees(sendRequest,dispatchData)
      },[]);
    const dispatchData=(data:ClassesDTO[])=>{
        setClasses(data);
    }
    const clickHandler=(s:string)=>{
        console.log(s);
        setCurrentClass((prevState)=>{
            if(prevState===s) return ''
            else return s;
        })
    }
    return(
        <div className={style.classes}>
        <div className="py-3 pb-4">
        <div className={style.selectSubject}>Select Subject</div>
        {error && <div>{error}</div>}
        {isLoading && <div>Loading</div>}
        {
            !error && !isLoading &&
            <div className={style.classeslist}>
                <div className="px-3 ">
                    {
                        classes?.map(x=>{
                        return(
                            <SingleClass onclick={clickHandler.bind(null,x.classTitle)} currentClass={currentClass} classDetail={x}/>
                        )
                        
                        })
                    }
                </div>
            </div>
        }       
        </div>
        </div>
    )
}