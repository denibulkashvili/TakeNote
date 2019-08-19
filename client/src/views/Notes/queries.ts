import gql from 'graphql-tag'

export const NOTES_QUERY = gql`
  query NotesQuery {
    notes {
      id
      name
      content
      created
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

