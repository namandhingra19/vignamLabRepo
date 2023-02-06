import React, { useState } from "react";
import style from './MultipleChoice.module.css'
const MultipleChoiceQuestion = (props) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
  const [isCorrectOption,setisCorrectOption]=useState(false);
  const [isIncorreectOption,setisinCorrectOption]=useState(false)
  const clickHandler=(index)=>{
    setSelectedOptionIndex(index);
        if(index == props.question.correctOption){
            setisCorrectOption(true);
            setisinCorrectOption(false);
        }
        else{
            setisCorrectOption(false)
            setisinCorrectOption(true);
        }
        
  }
  return (
    <div className={`container ${style.box}`}>
    <h2 className={` ${style.questionTitle}`}>{props.question.title}</h2>
      {props.question.options.map((option, index) => (
        <div className={`${style.optionsBox} ${(isCorrectOption)?`${style.correctOptionColor}`:`${style.optionsBox}`} ${(isIncorreectOption)?`${style.incorrectOptionColor}`:`${style.optionsBox}`}`} key={index}> 
            <input className={` ${style.checkboxOption}`}
            type="checkbox"
            name="options"
            value={index}
            checked={selectedOptionIndex === index}
            onChange={clickHandler.bind(null, index)}
          />
          <div className={` ${style.optionText}`}>{option}</div>
        </div>
      ))}
      {selectedOptionIndex !== '' && (
        <div>
          {selectedOptionIndex === props.question.correctOption
            ? "Correct!"
            : "Incorrect, try again"}
        </div>
      )}
    </div>
  );
};

export default MultipleChoiceQuestion;