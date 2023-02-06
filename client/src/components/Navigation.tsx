import { Fragment, useState } from "react";
import ReactDOM from "react-dom";
import style from './Navigation.module.css'
import React from "react";
import { ClassesList } from "./ClassesList";
import { useSelector } from 'react-redux';
import { RootState } from "../store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";
export const Navigation = () => {
const [showmodal,setShowmodel]=useState(false);
const clickHandler=()=>{
    setShowmodel(true);
}
const classModalHandler=()=>{
    setShowmodel(false);
}
const data=useSelector<RootState,{subject_name:string,class_name:string}>(state=>{
    return{
        class_name:state.subjects.class_name,
        subject_name:state.subjects.subject_name
    }
})

  return (
    <Fragment>
    {(showmodal) && <ClassModal onclick={classModalHandler}/>}
      <div className="col-3">
        <div className="row py-2">
          <img className="col-2" src="../../public/logo.png"></img>
          <button onClick={clickHandler} className={`col-8 d-flex ${style.classListDropdown}`}>
            <div className={` ${style.classListDropdownText}`} >Class {data.class_name} {data.subject_name}</div>
            <span className={` ${style.classListDropdownText}`}>
            <FontAwesomeIcon 
                        icon={faChevronDown}
                        size="lg"
                    />
            </span>
          </button>
        </div>
      </div>
      <div className="col-8 py-1 px-5">
        <div className={`${style.rootSearch}`}>
        <div className={`${style.searchBar}`}>
        <span className={` ${style.searchFont}`}>
            <FontAwesomeIcon 
                        icon={faMagnifyingGlass}
                        size="lg"
                    />
            </span>
            <div className={` ${style.searchText}`} >Search for Topic and Chapters </div>
        </div>
        </div>
        
      </div>
    </Fragment>
  );
};

const Backdrop=(props:any)=>{
    return(
        <div className={style.backdrop} onClick={props.onconfirm}>
        </div>
    )
}

const ClassModal =(props)=>{
    console.log('hh')
    return(
        <Fragment>
            {ReactDOM.createPortal(
                <Backdrop onconfirm={props.onclick}></Backdrop>,
                document.getElementById('backdrop-root')
            )}
            {ReactDOM.createPortal(
                <ClassesList onconfirm={props.onclick}/>,
                document.getElementById('class-root')
            )}
        </Fragment>
    )
}