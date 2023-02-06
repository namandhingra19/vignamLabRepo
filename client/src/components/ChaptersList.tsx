import React from 'react'
import { SingleChapter } from './utils/SingleChapter'
import {useSelector} from 'react-redux'
import { RootState } from '../store'
import { ChapterDTO } from '../models/ChaptersDTO'
export const TopicsList=()=>{
    const data=useSelector<RootState,ChapterDTO[]>((state)=>{
        return(
            state.subjects.chapters
        )
    })
    return(
        <div className='row'>
            {
                data.map(x=>
                    {return(
                        <SingleChapter chapterdata={x} />
                    )}
                )
            }
        </div>
    )
}