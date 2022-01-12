const { gql } = require('apollo-server');

module.exports = gql`

  type User{
    email: String!
    username: String!
    createdAt: String!
    token: String!
    tags: [String]!
  }

  type Note {
    title: String!
    content: String!
    createdAt: String!
    updatedAt: String!
    author: String!
    tags: [String]!
   
    id: ID!
  }

  type Todo{
    title: String!
    author: String!
    createdAt: String!
    items: [TodoItem]!
    updatedAt: String!
    tags: [String]!
    id: ID!
  }

  type TodoItem{
    createdAt: String!
    content: String!
    completed: Boolean!
    ide: String
    
  }

  type Item{
    itemType: String!
    item: ID!
    createdAt: String!
  }

  input RegisterInput {
    username: String!
    password: String!
    confirmPassword: String!
    email: String!
  }

  input TodoItemInput{
    createdAt: String!
    content: String!
    completed: Boolean!
    ide: String
  }
  
  type Query {
    getNotes(token: String!): [Note]! 
    getTodos(token: String!): [Todo]!
    getItems(token: String!): [Item]!
    getTags(token: String!): [String]! 

    getNote(token: String!, id: ID!): Note!
    getTodo(token: String!, id: ID!): Todo!
  }
  type Mutation {
    register(registerInput: RegisterInput): User!
    login(username: String!, password: String!): User!

    createFakeData: String!
    adjustFakeData: String!

    createTags(token: String!, tags: [String]!): String!

    createNote(token: String!, title: String!, content: String!, tags: [String]!): Note!
    deleteNote(token: String!, id: ID!): String!
    editNote(token: String!, id: ID!, newTitle: String!, newContent: String!, tags: [String]!): Note!

    createTodo(token: String!, title: String!, items: [TodoItemInput]!, tags: [String]!): Note!
    deleteTodo(token: String!, id: ID!): String!
    editTodo(token: String!, , id: ID!, newTitle: String!, newItems: [TodoItemInput]!, tags: [String]!): Todo!
    
  }
  
`;
