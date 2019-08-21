export interface Note {
  id: number
  name: string
  content: string
  postedBy: string
  createdAt: string
}

export interface NotesData {
  notes: Note[]
}