import { TopicDTO } from "./TopicDTO"

export interface ChapterDTO{
    title:string
    topics:TopicDTO[]
}

export interface ChaptersDTO{
    subject_name:string
    class_name:string
    chapters:ChapterDTO[]
}
