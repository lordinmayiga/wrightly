const { ApolloServer, gql } = require('apollo-server');
const mongoose = require('mongoose')
require("dotenv").config()


const typeDefs = require('./graphql/typedef')
const resolvers = require('./graphql/resolvers/index')
const MONGODB = `${process.env.MONGODB_KEY}`

const stuff = async function () {

  // const schema = makeExecutableSchema({
  //   typeDefs,
  //   resolvers,
  // });

  
  const server = new ApolloServer({ typeDefs, resolvers });
  
  PORTS = 4005;
  mongoose
  .connect(MONGODB)
  .then( () => {
      console.log('MongoDB connected successfully')
      server.listen().then(({ url }) => {
        console.log(`🚀  Server ready at ${url}`);
      });
  })
}

stuff()

  // const server = new ApolloServer({ typeDefs, resolvers });
  
  // // The `listen` method launches a web server.
  // server.listen().then(({ url }) => {
  //   console.log(`🚀  Server ready at ${url}`);
  // });