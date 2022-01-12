
const iterateObject = (object) =>{
  console.log("\n iterating \n")
  for(let i in object){
    console.log(`i: ${i} and ${object[i]}`)
  }
  console.log("\n")
}


const { AuthenticationError } = require('apollo-server');

const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

module.exports = (token) => {
  const authHeader = "stuff"
  if (authHeader) {
    // Bearer ....
    
    if (token) {
      try {
        const user = jwt.verify(token, SECRET_KEY);
        return user;
      } catch (err) {
        throw new AuthenticationError('Invalid/Expired token');
      }
    }
    throw new Error("Authentication token must be 'Bearer [token]");
  }
  throw new Error('Authorization header must be provided');
};
