import React, { Fragment, useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,faRectangleList,faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import { SingleSubject } from "./SingleSubject";
import { ClassesDTO } from "../../models/ClassesDTO";
export const SingleClass:React.FC<{classDetail:ClassesDTO,currentClass:string,onclick:Function}>=(props)=>{
    const [showSubject,setshowSubject]=useState(false);
    useEffect(()=>{
        if(props.currentClass===props.classDetail.classTitle){
            setshowSubject(true)
        }
        else{
            setshowSubject(false);
        }
    },[props.currentClass])
    const clickHandler=()=>{
        props.onclick();
    }
    return(
        <div className="">
            <div className=" d-flex justify-content-between px-2 py-2" style={{cursor:'pointer'}} onClick={clickHandler}>
                
                <div className="h5">
                    Class {props.classDetail.classTitle}
                </div>
                
                <FontAwesomeIcon
                            icon={faChevronDown}
                            size="lg"
                        />
            </div>
            {
                showSubject &&
                <div className="d-flex flex-column">
                    {
                        props.classDetail.subjects.map((x)=>{
                            return(
                                <SingleSubject subject={x} class_id={props.classDetail.classId}/>
                            )
                        })
                    }
                </div>
            }
        </div>
    )
}