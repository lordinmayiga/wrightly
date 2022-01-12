const { createServer } = require( "http");
const { execute, subscribe } = require( "graphql");
const { SubscriptionServer } = require( "subscriptions-transport-ws");
const { makeExecutableSchema } = require( "@graphql-tools/schema");
const express = require( "express");
const { ApolloServer } = require( "apollo-server-express");
const resolvers = require('./graphql/resolvers/index')
const typeDefs = require('./graphql/typedef')
const mongoose = require('mongoose')

// * password: BohExzeVCv5LIS7R

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://Lordin:BohExzeVCv5LIS7R@cluster0.lsk2v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const MONGODB = "mongodb+srv://Lordin:BohExzeVCv5LIS7R@cluster0.lsk2v.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
var PORTS;
var httpServer;
var server;




const stuff = async function () {
  const app = express();

  httpServer = createServer(app);

  const schema = makeExecutableSchema({
    typeDefs,
    resolvers,
  });

  const subscriptionServer = SubscriptionServer.create(
    { schema, execute, subscribe },
    { server: httpServer, path: '/graphql' }
  );

  server = new ApolloServer({
    schema,
    plugins: [{
      async serverWillStart() {
        return {
          async drainServer() {
            subscriptionServer.close();
          }
        };
      }
    }],
  });
  await server.start();
  server.applyMiddleware({ app });

  PORTS = 3000;
  mongoose
  .connect(MONGODB)
  .then( () => {
      console.log('MongoDB connected successfully')
      httpServer.listen(PORTS, () =>
    console.log(`Server is now running on http://localhost:${PORTS}/graphql`)
  );
  })
  // .error( () => {
  //     console.error('Error while connecting to MongoDB');
  // })
  
    
  
  // httpServer.listen(PORTS, () =>
  //   console.log(`Server is now running on http://localhost:${PORTS}/graphql`)
  // );
}
// const PORT = 4005

//   .then((res) => {
//     console.log(`Server running at ${res.url}`);
//   })
//   .catch(err => {
//     console.error(err)
//   })
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// })

stuff()
