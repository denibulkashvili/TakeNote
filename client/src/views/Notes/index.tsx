import React from 'react'
import { useQuery } from 'react-apollo';
import { NOTES_QUERY } from './queries';
import SingleNote from './SingleNote';
import { Note, NotesData } from './interfaces';

type Props = {}

const Notes: React.FC<Props> = () => {

  const { loading, data } = useQuery<NotesData>(NOTES_QUERY)
  
  if (loading) return <div>Loading..</div>
  if(!data) {
    return <div>No data</div>
  } else {
    console.log({ data })
    const notesToRender: Note[] = data.notes
    return (
      <>
        {notesToRender.map(note => <SingleNote key={note.id} note={note} />)}
      </>
  )
  }
}


export default Notes
