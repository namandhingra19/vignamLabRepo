import express, { Request, Response } from 'express'
import mongoose from 'mongoose'
import { getChapters } from './controllers/getChaptersController';
import { getClasses } from './controllers/getClassesController';
import cors from "cors";
const app = express();
const port = 5000
app.use(
  cors({
    origin: "*",
  })
);
app.use(express.json());
app.get('/', (req:Request, res:Response) => {
  res.send('Hello World!')
})
app.get('/classes',getClasses);
app.get('/:class_id/:subject_id',getChapters);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connect();
}) 
const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(
    `mongodb+srv://naman12:spW7F8n2bIrWoZSD@cluster0.9rzomve.mongodb.net/vigman_labs?retryWrites=true&w=majority`,
    {},
    (err) => {
      if (err) console.log("Error connecting to MongoDB", err);
      else console.log("Connected to MongoDB");
    }
  );
};