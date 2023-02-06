import { Request, Response } from "express";
import { ObjectId } from "mongoose";
import { ChapterDTO, ChaptersDTO} from "../models/ChapterDTO";
import  Class from "../schemas/Class";
import Subject from "../schemas/Subject";
import Chapter from '../schemas/Chapter'
type ChapterObject  = [{
    _id:ObjectId
    title: string;
    theory: string;
    simulation: string;
    askDoubt: string;
    Questions: string;
  }];
    
export const getChapters=async(req:Request,res:Response)=>{
    const {subject_id,class_id}=req.params;
    const chapters=await Chapter.find({subject_id:subject_id,class_id:class_id});
    let chaptersDTOArray:Array<ChapterDTO>=[]
    chapters.forEach(element=>{
        chaptersDTOArray.push(
            {title:element.title as string,topics:element.topics as ChapterObject }
        )
    })
    
    const className=await Class.findById(class_id);
    const subjectName=await Subject.findById(subject_id);
    
    // const chaptersDTO:ChaptersDTO={subject_id:subject_id as unknown as ObjectId,class_id:class_id as unknown as ObjectId,chapters:chaptersDTOArray}
    const chaptersDTO:ChaptersDTO={class_name:className?.title as string,subject_name: subjectName?.title as string,chapters:chaptersDTOArray}

    res.json(chaptersDTO)
}
