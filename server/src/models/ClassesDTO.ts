import mongoose, { ObjectId } from "mongoose"

export class SubjectDTO{
    id: mongoose.Schema.Types.ObjectId
    title: string
}

export class ClassesDTO{
    classId: mongoose.Schema.Types.ObjectId
    classTitle: string
    subjects: SubjectDTO[]
}