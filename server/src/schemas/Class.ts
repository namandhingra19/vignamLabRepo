import mongoose from "mongoose";
export const classesSchema = new mongoose.Schema({
  title: { type: String },
  subjects: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subject",
      },
    },
  ],
});
const ClassModel = mongoose.model("Classes", classesSchema);
export default ClassModel;
