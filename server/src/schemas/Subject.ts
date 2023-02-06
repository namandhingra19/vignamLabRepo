import mongoose, { Schema } from "mongoose"


export const subjectSchema=new Schema({
    title:{
        type:String
    }
})

const Subject = mongoose.model("Subjects",subjectSchema);
export default Subject;