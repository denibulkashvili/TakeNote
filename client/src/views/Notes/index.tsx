import React from 'react'
import { useQuery } from 'react-apollo';
import { NOTES_QUERY } from './queries';
import SingleNote from './SingleNote';
import styled from 'styled-components';
import { NotesQuery } from '../../generatedModels';

const NotesWrapper = styled('div')`
  padding: 20px;
  display: flex;
`

type Props = {}

const Notes: React.FC<Props> = () => {

  const { loading, data } = useQuery<NotesQuery.Query>(NOTES_QUERY)
  console.log({ data })
  if (loading) return <div>Loading..</div>
  if(!data) {
    return <div>No data</div>
  } else {
    const notesToRender = data.notes
    return (
      data.notes && <NotesWrapper>
        {notesToRender && notesToRender.map(note => note && <SingleNote key={note.id} note={note} />)}
      </NotesWrapper>
  )
  }
}


export default Notes
