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

const questions=[
    {
        title:'Identify Negative Integer',
        correctOption:'3',
        options:[
        '0','1','2','-1'
        ]
    },
    {
        title:'How much is -8 is less than -3 ? ',
        correctOption:'0',
        options:[
        '5','-5','11','-11'
        ]
    }
]
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
                    Video
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
                    <div>
                        <div className='row'>
                        <iframe width="200" height="500" src="https://www.youtube.com/embed/up5RvhBtFy8" title="YouTube video" ></iframe>
                        </div>
                        <div className='row' style={{marginTop:'20px'}}>
                        <iframe  width="200" height="500"  src="https://www.youtube.com/embed/AF31lWJJSgg" title="YouTube video player" ></iframe>
                        </div>
                       
                    </div>
                    
                }
                {
                    desc==='Questions' &&
                    questions.map((x)=>{
                        return(
                            <MultipleChoiceQuestion question={x}/>
                        )
                    })
                }
            </div>
        </div>
    )
}