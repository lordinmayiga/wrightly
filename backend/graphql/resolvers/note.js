
const {User, Note, Item} = require('../../models/Model')
const checkAuth = require("../../util/check-auth")


module.exports = {
    
  Query: {
    getNotes: async (_, { token }, context) => {
      let user = checkAuth(token)
      // console.log("\n")
      // console.log(user)
      // console.log(user.username)
      // console.log("\n")
      return await Note.find({author: user.username}).sort("-updatedAt")
      
    },

    getNote: async (_, { token, id }, context) => {
      let user = checkAuth(token)
      let todo =  await Note.findById(id)
      if (!todo){
        throw new Error("Doesn't exist!")
      }return todo
      
    }
   
  },
  Mutation: {
    createNote: async (_, { token, title, content, tags}, context) => {
      let user = checkAuth(token)
      if(title.trim()==""){
        throw new Error("Title is empty")
      }else if(content.trim() == ""){
        throw new Error("Content is empty")
      }
      let newNote = await Note.create({title, content, author: user.username, createdAt: new Date(), updatedAt: new Date(), tags})
      await Item.create({itemType: "note", item: newNote._id, createdAt: new Date()})
      return newNote
    },

    deleteNote: async (_, { token, id}, context) => {
      Note.findByIdAndDelete(id, function(err){
        if(err) throw new Error("something went wrong")
    })
   
    return "Successful"

    },

    editNote: async (_, { token, id, newTitle, newContent, tags}, context) => {
      let oldNote = await Note.findById(id)
      oldNote.title = newTitle
      oldNote.content = newContent
      oldNote.tags = tags
      oldNote.updatedAt = new Date()
      await oldNote.save()
      return oldNote
    }

  
}

}