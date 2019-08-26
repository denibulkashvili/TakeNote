import gql from 'graphql-tag'

export const ME_QUERY = gql`
  query MeQuery($token: String!) { 
    me(token: $token) {
      id
      username
    }
  }
`

export const CREATE_USER_MUTATION = gql`
  mutation CreateUserMutation($username: String!, $password: String!) {
    createUser(username: $username, password: $password) {
      user {
        username
      }
    }
  }
`

export const TOKEN_AUTH_MUTATION = gql`
  mutation TokenAuth($username: String!, $password: String!) {
    tokenAuth(username: $username, password: $password) {
      token
    }
  }
`

export const VERIFY_TOKEN_MUTATION = gql`
  mutation VerifyToken($token: String!) {
    verifyToken(token: $token) {
      payload
    }
  }
`