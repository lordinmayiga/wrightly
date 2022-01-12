import {gql} from "@apollo/client"

const TAGS = gql`
query($getTagsToken2: String!){
    getTags(token: $getTagsToken2)
  }
`


const TODOS = gql`
query($getTodosToken2: String!){
    getTodos(token: $getTodosToken2) {
      author
      title
      id
      tags
      createdAt
      updatedAt
      items {
        content
  
      }
    }
  }
`

const CREATETODO = gql`
mutation($token: String!, $title: String!, $items: [TodoItemInput]!, $tags: [String]!){
  createTodo(token: $token, title: $title, items: $items, tags: $tags) {
    id
  }
}`

const NOTES = gql`
query($getNotesToken2: String!){
    getNotes(token: $getNotesToken2) {
      id
      content
      title
      tags
      createdAt
      updatedAt
    }
  }
`

const CREATENOTE = gql`
mutation($token: String!, $title: String!, $content: String!, $tags: [String]!){
    createNote(token: $token, title: $title, content: $content, tags: $tags) {
      title
      id
    }
  }
`
export {TODOS, CREATETODO, CREATENOTE, NOTES, TAGS}
