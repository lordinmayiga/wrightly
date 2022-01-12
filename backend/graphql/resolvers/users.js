const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const checkAuth = require('../../util/check-auth')
const { UserInputError } = require('apollo-server');

const {
  validateRegisterInput,
  validateLoginInput
} = require('../../util/validators');
const { SECRET_KEY } = require('../../config');
const {User} = require("../../models/Model")

function generateToken(user) {
  return jwt.sign(
    {username: user.username, email: user.email},
    SECRET_KEY,
    
  );
}

module.exports = {
  Query: {
    async getTags(_, { token}) {
      let user = checkAuth(token)
      let userModel = await User.findOne({username: user.username})
      return userModel.tags
    }
  },
  
  Mutation: {
    async createTags(_, { token, tags }) {
      let user = checkAuth(token)
      let userModel = await User.findOne({username: user.username})
      userModel.tags = tags
      await userModel.save()
      console.log("\n")
      console.log(tags)
      console.log("\n")
      console.log(userModel)
      console.log("\n")
      return "Done!"
    },
    async login(_, { username, password }) {
      const { errors, valid } = validateLoginInput(username, password);

      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      const user = await User.findOne({ username });

      if (!user) {
        errors.general = 'User not found';
        throw new UserInputError('User not found', { errors });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        errors.general = 'Wrong crendetials';
        throw new UserInputError('Wrong crendetials', { errors });
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token
      };
    },
    
    async register(
      _,
      {
        registerInput: { username, email, password, confirmPassword }
      }
    ) {
      // Validate user data
      const { valid, errors } = validateRegisterInput(
        username,
        email,
        password,
        confirmPassword
      );
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }
      // TODO: Make sure user doesnt already exist
      const user = await User.findOne({ email });
      if (user) {
        throw new UserInputError('Email is taken', {
          errors: {
            email: 'This email is taken'
          }
        });
      }
      // hash password and create an auth token
      password = await bcrypt.hash(password, 12);

      const newUser = new User({
        email,
        username,
        password,
        createdAt: new Date(),
      });

      const res = await newUser.save();

      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token
      }},
    }
};
