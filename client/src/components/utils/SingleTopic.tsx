import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import { topic } from '../../store/topicStore';
import { RootState } from '../../store';
import { TopicDTO } from '../../models/TopicDTO';
import style from './SingleTopic.module.css'
const topicActions=topic.actions;
export const SingleTopic:React.FC<{topicdata:TopicDTO}>=(props)=>{
    const dispatch=useDispatch();
    const clickHandler=()=>{
        dispatch(topicActions.setTopic({
            ...props.topicdata
        }))
    }
    const current_id=useSelector<RootState,string>((state=>{
        return(
            state.topics._id
        )
    }))
    return(
        <div className={`d-flex col-12  px-0 ${(props.topicdata._id===current_id)?`${style.clickTopic}`:``} ${style.topicTitle}`} onClick={clickHandler}>
            <div className={`${style.topicTitleText}`}>{props.topicdata.title}</div>
        </div>
    )
}
