export interface MenstrualCycle{

    "title": string,
    "sections": Section[]
}

export interface Section{
    "id": string,
    "title": string,
    "content": string,
    "subsections": Subsection[]
}

export interface Subsection{
    "id": string,
    "title":string,
    "content":string
}