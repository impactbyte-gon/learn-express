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
    // Empty all users
    users = []

    res.send({
      message: 'All users has been deleted',
      users: users
    })
  },

  // ---------------------------------------------------------------------------
  // Delete one user by id
  deleteOneUserById: (req, res) => {
    // Get id from params (/users/:id)
    const id = Number(req.params.id)

    // Replace users with filtered users
    users = users.filter(user => user.id !== id)

    res.send({
      message: 'One user has been deleted',
      id: id
    })
  },

  // ---------------------------------------------------------------------------
  // Update one user by id
  updateOneUserById: (req, res) => {
    // Get id from params (/users/:id)
    const id = Number(req.params.id)

    // Get new name from request body (req.body)
    const newName = req.body.name

    // Change name in user with matching id
    const newUsers = users.map(user => {
      if (user.id === id) {
        user.name = newName
        return user
      } else {
        return user
      }
    })

    res.send({
      message: 'One user has been updated',
      id: id,
      newName: newName
    })
  }
}
