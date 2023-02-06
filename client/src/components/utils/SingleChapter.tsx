import React, { Fragment, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,faRectangleList,faChevronUp
} from "@fortawesome/free-solid-svg-icons";
import { SingleTopic } from "./SingleTopic";
import { ChapterDTO } from "../../models/ChaptersDTO";
import style from "./SingleChapter.module.css"
export const SingleChapter:React.FC<{chapterdata:ChapterDTO}>=(props)=>{
    const [click,setClick]=useState(false);
    const clickHandler=()=>{
        setClick((prevState)=>{return !prevState})
    }
    return(
        <Fragment>
        <button className={`col-12 ${style.dropDownButton}`}>
            <div className=" d-flex justify-content-between align-items-center py-2" onClick={clickHandler}>
                <div className="d-flex">
                    <div className={`${style.listBookIcon}`}>
                        <FontAwesomeIcon
                            icon={faRectangleList}
                            size="xs"
                        />
                    </div>
                    <div className={`${style.chapterTitle}`}>{props.chapterdata.title}</div>
                </div>
                <div className="">
                    <FontAwesomeIcon
                        icon={faChevronDown}
                        size="xs"
                    />
                </div>
            </div>
            </button>
            {
                click && 
                <div className={`${style.internalTopic}`} >
                    {
                        props.chapterdata.topics.map((x)=>{
                            return(
                                <SingleTopic topicdata={x} key={x._id}/>
                            )
                        })
                    }
                </div>
            }
            
            </Fragment>
       
    )
}