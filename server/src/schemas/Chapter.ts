import mongoose from "mongoose"
export const chapterSchema=new mongoose.Schema({
    title:{
        type:String
    },
    subject_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject"
    },
    class_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class"
    },
    topics:[
        {
            theory:{
                type:String
            }
            ,
            title:{
                type:String
            },
           
            simulation:{
                type:String
            },
            askDoubt:{
                type:String
            },
            Questions:{
                type:String
            }
        }
    ]
})

const Chapter=mongoose.model("Chapters",chapterSchema);
export default Chapter;
