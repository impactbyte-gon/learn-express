const data = require('./data')

let nextId = data.nextId
let users = data.users

module.exports = {
  // ---------------------------------------------------------------------------
  // Get all users
  getUsers: (req, res) => {
    res.send({
      message: 'List of users',
      data: users
    })
  },

  // ---------------------------------------------------------------------------
  // Create new user
  createNewUser: (req, res) => {
    // Check if name in request body is exist
    if (req.body.name) {
      // Get new user data from request body
      const newUser = {
        id: nextId,
        name: req.body.name
      }

      // Concat new user into newUsers variable
      // Then replace old users with new users
      users = users.concat(newUser)
      // Increment nextId
      nextId++

      // Send response
      res.send({
        message: 'Created new user',
        newUser: newUser,
        data: users
      })
    } else {
      res.send({
        message: 'Failed to create user',
        error: 'name is not provided'
      })
    }
  },

  // ---------------------------------------------------------------------------
  // Delete all users

  deleteAllUsers: (req, res) => {
    res.send({
      message: 'All users has been deleted'
    })
  },

  deleteOneUserById: (req, res) => {
    res.send({
      message: 'One user has been deleted'
    })
  },

  updateOneUserById: (req, res) => {
    res.send({
      message: 'One user has been updated'
    })
  }
}
