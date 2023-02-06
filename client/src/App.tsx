import { Fragment, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch } from 'react-redux';
import { TopicsList } from './components/ChaptersList'
import { Description } from './components/Description'
import { Navigation } from './components/Navigation'
import useHttp from './hooks/use-http'
import { useParams } from "react-router-dom";
import { getChapters } from './api/getChapters'
import { subject } from './store/subjectStore';
const subjectActions=subject.actions;
function App() {
  const{sendRequest,isLoading,error}=useHttp();
  const {class_id,subject_id}=useParams();
  const dispatch=useDispatch();
  

  useEffect(()=>{
    getChapters(class_id,subject_id,sendRequest,dispatchData)
  },[]);
  const dispatchData=(data)=>{
    dispatch(subjectActions.setChapter({
      subject_name:data.subject_name,
      class_name:data.class_name,
      chapters:data.chapters
    }))
  }
  return (
    <Fragment>
    {error && <div>{error}</div>}
    {isLoading && <div>Loading</div>}
    {
      !error && !isLoading &&
      <div className='container-fluid vh-100 d-flex flex-column'>
      <div className='row' style={{backgroundColor:'rgb(248, 249, 250)'}}>
          <Navigation/>
      </div>
      <div className='row h-100'>
          <div className='col-3 border' style={{paddingTop:'24px',paddingBottom:'24px',backgroundColor:'rgb(248, 249, 250)'}}>
                  <TopicsList/>
          </div>
          
          <div className='col-9 border'>
                <Description/>
          </div>
      </div>
    </div> 
    }  
    </Fragment>
  )
}

export default App
