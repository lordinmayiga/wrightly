import {gql} from "@apollo/client"

const DELETENOTE = gql`
mutation($token: String!, $deleteNoteId: ID!){
    deleteNote(token: $token, id: $deleteNoteId)
  }`

const DELETETODO = gql`
mutation($deleteTodoToken2: String!, $deleteTodoId: ID!){
  deleteTodo(token: $deleteTodoToken2, id: $deleteTodoId)
}`

export {DELETENOTE, DELETETODO}