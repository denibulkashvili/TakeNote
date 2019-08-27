import React, { useState } from 'react'
import styled from 'styled-components';
import { NotesQuery }  from '../../generatedModels';
import { Card, Icon, Badge, Button, Form, Input } from 'antd';
import { Colors } from '../../shared/Styles';
import { useMutation } from 'react-apollo';
import { EDIT_NOTE_MUTATION, DELETE_NOTE_MUTATION } from './queries';
import Modal from '../../shared/Modal';
import { Consumer } from '../../App';

const CardWrapper = styled(Card)`
  background: #F2F4F5;
  padding: 20px;
  width: 300px;
  margin: 5px!important;
`
const Meta = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  color: ${Colors.textSecondary};
`
const Content = styled('p')`
  color: ${Colors.textPrimary};
  font-weight: 600px;
  font-size: 18px;
`
const Likes = styled('span')`
  float: right;
  color: ${Colors.themeDark};
`
const Footer = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
const ButtonGroup = Button.Group

const formatDate = (date: string) => {
  const monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ]

  var year = date.slice(0,4)
  var monthIndex = parseInt(date.slice(5,7));
  var day = date.slice(8,10)

  return `${day} ${monthNames[monthIndex-1]} ${year}`
}

const initialValues = {
  name: '',
  content: ''
}
type Props = {
  note: NotesQuery.Notes
}

const SingleNote: React.FC<Props> = ({ note }) => {
  const [isModalVisible, setModalVisible] = useState(false)
  const [values, setValues] = useState({name: note.name, content: note.content})
  const [editNote, _ ] = useMutation(EDIT_NOTE_MUTATION)
  const [deleteNote, __ ] = useMutation(DELETE_NOTE_MUTATION)

  const handleEdit = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault()

    editNote({ variables: {
      id,
      name: values.name,
      content: values.content
    } })
    setModalVisible(false)
    window.location.reload()
  }
  const handleDelete = (id: string) => {
    console.log(("clicked"))
    deleteNote({ variables: {id: note.id}})
    window.location.reload()
  }

  if (!note) return null 
  return (
    
    <CardWrapper title={note.name} >
      <Meta>
        <span>{formatDate(note.created)}</span>
        <span><Icon type="user" /> { note.postedBy.username } </span>
      </Meta>
      <Content>{note.content}</Content>
      <Footer>
        <Consumer>
          {value => value && value.isAuthenticated && <ButtonGroup>
            <Button onClick={() => setModalVisible(true)}>
              Edit
            </Button>
            <Button onClick={() => handleDelete(note.id)}>
              Delete
            </Button>
          </ButtonGroup>}
        </Consumer>
        <Likes>
          <Badge count={note.likes.length} style={{ background: Colors.themePrimary }}>
            <Icon type="like"  style={{ fontSize: "24px" }}/>
          </Badge>
        </Likes>
      </Footer>

      <Modal
        title="Edit Note" 
        isVisible={isModalVisible} 
      >
        <Form onSubmit={(e) => handleEdit(e, note.id)}>
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
        
    </CardWrapper>
  )
}

export default SingleNote
