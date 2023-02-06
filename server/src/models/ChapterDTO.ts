import mongoose, { ObjectId } from "mongoose"

export class ChapterDTO{
    title:string
    topics:[
        {
        _id:mongoose.Schema.Types.ObjectId
        title:string
        theory:string
        simulation:string
        askDoubt:string
        Questions:string
    }
    ]
}

export class ChaptersDTO{
    subject_name:string
    class_name:string
    chapters:ChapterDTO[]
}
// export class ChaptersDTO{
//     subject_id:mongoose.Schema.Types.ObjectId
//     class_id:mongoose.Schema.Types.ObjectId
//     chapters:ChapterDTO[]
// }