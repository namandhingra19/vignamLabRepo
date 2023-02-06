import React, { useState } from "react";
import style from './MultipleChoice.module.css'
const MultipleChoiceQuestion = (props) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [isCorrectOption,setisCorrectOption]=useState(false);
  const [isIncorreectOption,setisinCorrectOption]=useState(false)
  const clickHandler=(index)=>{
   var element =  document.getElementById(`item-${index}`);
     setSelectedOptionIndex(index);
        if(index == props.question.correctOption){
            setisCorrectOption(true)
        }
        else{
            setisCorrectOption(false)
        }
        
  }
  return (
    <div className={`container ${style.box}`}>
    <h2 className={` ${style.questionTitle}`}>{props.question.title}</h2>
      {props.question.options.map((option, index) => (
        <div  style={{
            backgroundColor: (selectedOptionIndex === index)? (isCorrectOption ? 'rgb(211, 249, 216)' : 'rgb(255, 227, 227)'):'',
          }} className={`${style.optionsBox} `} key={index}> 
            <input className={` ${style.checkboxOption}`}
            type="checkbox"
            name="options"
            value={index}
            checked={selectedOptionIndex === index}
            onChange={clickHandler.bind(null,index)}
          />
          <div className={` ${style.optionText}`}>{option} </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoiceQuestion;