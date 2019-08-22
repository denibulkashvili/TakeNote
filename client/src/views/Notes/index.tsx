import React, { useState } from 'react'
import { Icon } from 'antd'
import { useQuery } from 'react-apollo';
import styled from 'styled-components';
import { NOTES_QUERY } from './queries';
import SingleNote from './SingleNote';
import { NotesQuery } from '../../generatedModels';
import Modal from '../../shared/Modal';


const NotesWrapper = styled('div')`
  padding: 20px;
  display: flex;
`
const NewNoteWrapper = styled('div')`
  margin: 5px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px;
`

type Props = {}

const Notes: React.FC<Props> = () => {
  const { loading, data } = useQuery<NotesQuery.Query>(NOTES_QUERY)
  const [isModalOpen, setIsModalOpen] = useState(false)

  if (loading) return <div>Loading..</div>
  if(!data) {
    return <div>No data</div>
  } else {
    const notesToRender = data.notes
    return (
      <>
      {data.notes && <NotesWrapper>
        <NewNoteWrapper onClick={() => setIsModalOpen(true)}><Icon type="plus-circle" /></NewNoteWrapper>
        {notesToRender && notesToRender.map(note => note && <SingleNote key={note.id} note={note} />)}
      </NotesWrapper>}
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      </>
  )
  }
}


export default Notes
