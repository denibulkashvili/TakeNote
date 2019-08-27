import gql from 'graphql-tag'

export const NOTES_QUERY = gql`
  query NotesQuery {
    notes {
      id
      name
      content
      created
      postedBy {
        username 
      }
      likes {
        user {
          username
        }
      }
    }
  }
`

export const CREATE_NOTE_MUTATION = gql`
  mutation CreateNoteMutation($name: String, $content: String) {
    createNote(name: $name, content: $content) {
      id
    }
  }
`

export const EDIT_NOTE_MUTATION = gql`
  mutation EditNoteMUtation($id: String, $name: String, $content: String) {
    editNote(id: $id, name: $name, content: $content) {
      id 
    }
  }
`

export const DELETE_NOTE_MUTATION = gql`
  mutation DeleteNote($id: String) {
    deleteNote(id: $id) {
      id
    }
  }
`
