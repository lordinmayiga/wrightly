const { model, Schema } = require('mongoose');
const mongoose = require("mongoose")

const userSchema = new Schema({
  email: String,
  password: String,
  username: String,
  createdAt: String,
  tags: [{type: String}]
  
  
});

const noteSchema = new Schema({
  title: String,
  content: String,
  createdAt: String,
  author: String,
  
  updatedAt: {
    type: String,
    default: "Sun Jan 09 2022 17:00:56 GMT+0300 (East Africa Time)"
  },
  
  tags: [{type: String}]
})

const todoSchema = new Schema({
  title: String,
  author: String,
  createdAt: String,
  updatedAt: {
    type: String,
    default: "Sun Jan 09 2022 17:00:56 GMT+0300 (East Africa Time)"
  },
  tags: [String],
  items: [
    {
      createdAt: String,
      content: String,
      completed: Boolean,
      ide: String
    }
  ]
})

const itemSchema = new Schema({
  itemType: String,
  item: { type: mongoose.Types.ObjectId, ref: "item" },
  createdAt: String,
  
})


const Note = model("TodoNote", noteSchema)
const User = model("TodoUser", userSchema)
const Item = model("TodoItem", itemSchema)
const Todo = model("TodoTodo", todoSchema)



module.exports = {User, Note, Item, Todo}

