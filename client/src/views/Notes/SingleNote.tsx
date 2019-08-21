import React from 'react'
import styled from 'styled-components';
import { NotesQuery }  from '../../generatedModels';

const CardWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  background: #F2F4F5;
  margin: 5px;
  padding: 20px;
`

type Props = {
  note: NotesQuery.Notes
}

const formatDate = (date: string) => {
  // const monthNames = [
  //   "January", "February", "March",
  //   "April", "May", "June", "July",
  //   "August", "September", "October",
  //   "November", "December"
  // ]

  var year = date.slice(0,4)
  var month = date.slice(5,7);
  var day = date.slice(8,10)

  return `${day}/${month}/${year}`
}

const SingleNote: React.FC<Props> = ({ note }) => {
  return (
    
    <CardWrapper>
      <p>Name: {note.name}</p>
      <p>Date: {formatDate(note.created)}</p>
      <p>Content: {note.content}</p>
      <p>Likes: {note.likes.length}</p>
      <p>Author: ...</p>
    </CardWrapper>
  )
}

export default SingleNote
