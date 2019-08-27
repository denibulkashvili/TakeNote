import React, { useState } from 'react'
import { Icon, Button, Form, Input } from 'antd'
import { useQuery, useMutation } from 'react-apollo';
import styled from 'styled-components';
import { NOTES_QUERY, CREATE_NOTE_MUTATION } from './queries';
import SingleNote from './SingleNote';
import { NotesQuery } from '../../generatedModels';
import Modal from '../../shared/Modal';
import { Consumer } from '../../App';


const NotesWrapper = styled('div')`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
`
const NewNoteWrapper = styled('div')`
  margin: 5px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 300px; 
`

const initialValues = {
  name: '',
  content: ''
}

type Props = {}

const Notes: React.FC<Props> = () => {
  const { loading, data } = useQuery<NotesQuery.Query>(NOTES_QUERY)
  const [isModalVisible, setModalVisible] = useState(false)
  const [values, setValues] = useState(initialValues)
  const [createNote, ignoreResults ] = useMutation(CREATE_NOTE_MUTATION)
  console.log({ values })
  const handleCreateNote = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    createNote({ variables: {
        name: values.name, 
        content: values.content
      } 
    })
    
    setValues(initialValues)
    setModalVisible(false)
  }

  if (loading) return <div>Loading..</div>
  if(!data) {
    return <div>No data</div>
  } else {
    const notesToRender = data.notes
    return (
      <>
      {data.notes && 
        <NotesWrapper>
          <Consumer>
            {value => value && value.isAuthenticated && 
            <NewNoteWrapper onClick={() => setModalVisible(true)}>
              <Icon type="plus-circle" />
            </NewNoteWrapper>}
          </Consumer>
          {notesToRender && notesToRender.map(note => 
            note && <SingleNote key={note.id} note={note} />)
          }
        </NotesWrapper>}
      
        <Modal 
          title="New Note" 
          isVisible={isModalVisible} 
        >
          <Form onSubmit={(e) => handleCreateNote(e)}>
            <Form.Item>
              <Input 
                placeholder="Title" 
                value={values.name} 
                onChange={(e) => setValues({ ...values, name: e.target.value })}
              />
            </Form.Item>
            <Form.Item>
              <Input.TextArea 
                style={{ minHeight: "300px" }} 
                placeholder="Content"
                value={values.content} 
                onChange={(e) => setValues({ ...values, content: e.target.value })}
              >
              </Input.TextArea>
            </Form.Item>
            <Button key="submit" htmlType="submit">
              Save
            </Button>
            <Button key="back" onClick={() => setModalVisible(false)}>
              Cancel
            </Button>
          </Form>
        </Modal>  
      </>
  )
  }
}


export default Notes
