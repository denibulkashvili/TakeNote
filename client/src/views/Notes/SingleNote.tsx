import React from 'react'
import { Note } from './interfaces';

type Props = {
  note: Note
}

const SingleNote: React.FC<Props> = ({ note }) => {
  return (
    <div>
      Name: {note.name}
    </div>
  )
}

export default SingleNote
