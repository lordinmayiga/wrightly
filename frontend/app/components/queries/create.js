import {gql} from "@apollo/client"

const TODO = gql`
query($getTodoToken2: String!, $getTodoId: ID!){
    getTodo(token: $getTodoToken2, id: $getTodoId) {
      author
      createdAt
      tags
      title
      items {
        content
        completed
        createdAt
      }
    }
  }
`
const EDITTODO = gql`
mutation($editTodoToken2: String!, $editTodoId: ID!, $newTitle: String!, $newItems: [TodoItemInput]!, $editTodoTags2: [String]!){
    editTodo(token: $editTodoToken2, id: $editTodoId, newTitle: $newTitle, newItems: $newItems, tags: $editTodoTags2) {
      author
    }
  }
`

const NOTES = gql`
query($getNoteToken2: String!, $getNoteId: ID!){
    getNote(token: $getNoteToken2, id: $getNoteId) {
      author
      content
      title
      tags
      
    }
  }
`

const EDITNOTE = gql`
mutation($editNoteToken2: String!, $editNoteId: ID!, $newTitle: String!, $newContent: String!, $tags: [String]!){
    editNote(token: $editNoteToken2, id: $editNoteId, newTitle: $newTitle, newContent: $newContent, tags: $tags) {
      content
    }
  }
`


export {TODO, EDITTODO, NOTES, EDITNOTE}