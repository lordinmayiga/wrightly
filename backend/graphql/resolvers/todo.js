
const {User, Todo, Item} = require('../../models/Model')
const checkAuth = require("../../util/check-auth")

module.exports = {
    
  Query: {
    getTodos: async (_, { token}, context) => {
      let user = checkAuth(token)
      return await Todo.find({author: user.username}).sort("-updatedAt")
      
    },

    getTodo: async (_, { token, id}, context) => {
      let user = checkAuth(token)
      let todo =  await Todo.findById(id)
      if (!todo){
        throw new Error("Doesn't exist!")
      }return todo
      
    },

    getItems: async (_, { token}, context) => {
      let user = checkAuth(token)
      return await Item.find({author: user.username}).sort("-createdAt")
      
    },
  },
  Mutation: {
    createTodo: async (_, { token, title, items, tags}, context) => {
      let user = checkAuth(token)
      if(title.trim()==""){
        throw new Error("Title is empty")
      }
      let newtodo = await Todo.create({title, items, author: user.username, createdAt: new Date(), updatedAt: new Date(), tags})
      await Item.create({itemType: "todo", item: newtodo._id, createdAt: new Date()})
      return newtodo
    },

    deleteTodo: async (_, { token, id}, context) => {
      Todo.findByIdAndDelete(id, function(err){
        if(err) throw new Error("something went wrong")
    })
   
    return "Successful"

    },

    editTodo: async (_, { token, id, newTitle, newItems, tags}, context) => {
      let oldtodo = await Todo.findById(id)
      oldtodo.title = newTitle
      oldtodo.items = newItems
      oldtodo.tags = tags
      oldtodo.updatedAt = new Date()
      await oldtodo.save()
      return oldtodo
    }

  
}

}