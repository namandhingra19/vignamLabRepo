import { Request, Response } from "express";
import { ObjectId } from "mongoose";
import { ClassesDTO, SubjectDTO } from "../models/ClassesDTO";
import  Class from "../schemas/Class";
import Subject from "../schemas/Subject";
export const getClasses=async(req:Request,res:Response)=>{
    const classes=await Class.find();
    const subjects=await Subject.find();
    const classesDTOArray:Array<ClassesDTO>=[];
    classes.forEach(element => {
        let subjectDTOArray :Array<SubjectDTO>=[];
        
        element.subjects.forEach(subj => {
            let subTitle = subjects.find(x=>x.id==subj._id)?.title;
            subjectDTOArray.push({id:subj._id as unknown as ObjectId, title: subTitle as string})
        });
        classesDTOArray.push({
            classId : element.id as unknown as ObjectId,
            classTitle : element.title as string,
            subjects : subjectDTOArray
        })
    });
    res.json(classesDTOArray)

}
