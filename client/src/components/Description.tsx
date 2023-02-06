import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import { TopicDTO } from '../models/TopicDTO';
import { RootState } from '../store';
import style from './Description.module.css'
import MultipleChoiceQuestion from './utils/MultipleChoice';
export const Description=()=>{
    const [desc,setDesc]=useState('theory');
    const clickHandler=(s:string)=>{
        setDesc(s);
    }
    const data=useSelector<RootState,TopicDTO>((state)=>{
        return(
            {
                ... state.topics
            }
        )

    })

    const question={
    title:'Identify Negative Integer',
    correctOption:'3',
    options:[
      '0','1','2','-1'
    ]
  }
    return(
        <div>
            <div className='d-flex justify-content-around py-4'>
                <button className={`${style.descButton} ${desc==='theory'?`${style.clickedDesc}`:''}`} onClick={clickHandler.bind(null,'theory')}>
                    Theory
                </button>
                <button className={`${style.descButton} ${desc==='simulation'?`${style.clickedDesc}`:''}`} onClick={clickHandler.bind(null,'simulation')}>
                    Simulation      
                </button>
                <button className={`${style.descButton} ${desc==='askDoubt'?`${style.clickedDesc}`:''}`} onClick={clickHandler.bind(null,'askDoubt')}>
                    Ask Doubts
                </button>
                <button className={`${style.descButton} ${desc==='video'?`${style.clickedDesc}`:''}`} onClick={clickHandler.bind(null,'video')}>
                    video
                </button>
                <button className={`${style.descButton} ${desc==='Questions'?`${style.clickedDesc}`:''}`} onClick={clickHandler.bind(null,'Questions')}>
                    Questions
                </button>
            </div>
            <div className={`container ${style.fontText}`}>
                {
                    data[`${desc}`]
                }
                {
                    desc==='video' &&
                    <div className="ratio ratio-16x9">
                        <iframe src="https://www.youtube.com/embed/up5RvhBtFy8" title="YouTube video" ></iframe>
                    </div>
                }
                {
                    desc==='Questions' &&
                    <MultipleChoiceQuestion question={question}/>
                }
            </div>
        </div>
    )
}