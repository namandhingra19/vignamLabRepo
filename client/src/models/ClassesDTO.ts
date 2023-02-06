export interface SubjectDTO{
    id: string
    title: string
}

export interface ClassesDTO{
    classId: string
    classTitle: string
    subjects: SubjectDTO[]
}