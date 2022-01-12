// const postsResolvers = require('./posts');
// const usersResolvers = require('./users');
// const commentsResolvers = require('./comments');
// const testResolvers = require('./textComments')

const noteResolvers = require("./note");
const userResolvers = require("./users")
const todoResolvers = require('./todo')
const createResolvers = require('./createFakeData')


module.exports = {
  
  Query: {
    ...userResolvers.Query,
    ...noteResolvers.Query,
    ...todoResolvers.Query
  },
  Mutation: {
    ...createResolvers.Mutation,
    ...userResolvers.Mutation,
    ...noteResolvers.Mutation,
    ...todoResolvers.Mutation
  },
  
};
