const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const checkAuth = require('../../util/check-auth')

const todoResolvers = require('./todo')
const noteResolvers = require("./note");

const {
  validateRegisterInput,
  validateLoginInput
} = require('../../util/validators');
const { SECRET_KEY } = require('../../config');
const { Note, Todo, Item } = require("../../models/Model")

const notesContent = "This is the notes content, to keep things short"
const todoItems = ["Be awesome", "Be awesome some more", "Be a hitman", "Eat", "Groceries", "Bananas", "Other Food", "Don't murder anyone"]
const titles = ["Grocery List", "Other Suff", "How to be a hitman", "How to be cool", "how to get girls"]

const randomChoice = (list) =>{
    return list[Math.floor(Math.random()*list.length)]
}

const randomChoices = (list, num) =>{
    if(list.length<num) throw new Error("Num is too big");
    let newList = []
    for(let i=0;i<num;i++){
        newList.push(randomChoice(list))
    }
    return newList
}

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkxvcmRpbiIsImVtYWlsIjoibG9yZGlubWlrZW9AZ21haS5jb20iLCJpYXQiOjE2NDA2MDczNjEsImV4cCI6MTY0MDY5Mzc2MX0.6W49TKcYaS_VKHgceRpWEPygcdDj_mwUXfcwulKw6B8"

module.exports = {
  
  Mutation: {
    createFakeData: async () => {
      for(let i=0; i<20; i++){
        let itemType = randomChoice(["note", "todo"])
        if(itemType=="note"){
          let newNote = await Note.create({title: randomChoice(titles), content: notesContent, author: "Lordin", createdAt: new Date()})
          await Item.create({itemType: "note", item: newNote._id, createdAt: new Date()})
          
        }else{
          let items = randomChoices(todoItems, 5).map((e)=>{return {createdAt: new Date(), content: e, completed: false}})
          let newtodo = await Todo.create({title: randomChoice(titles), items, author: "Lordin", createdAt: new Date()})
          await Item.create({itemType: "todo", item: newtodo._id, createdAt: new Date()})
          
        }
      }

      return "Done!"
    },

    adjustFakeData: async() =>{
      let todos = await Todo.find({})
      for(let i=0;i<todos.length; i++){
        todos[i].save({tags: []})
      }

      let notes = await Note.find({})
      for(let i=0;i<notes.length; i++){
        notes[i].save({tags: ["mike"]})
      }
      return "Done!"

    }
    
    
}

}
