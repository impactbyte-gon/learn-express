const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 8000

// -----------------------------------------------------------------------------
// EXPRESS PLUGINS

// Use body-parser into express
app.use(bodyParser.json())

// -----------------------------------------------------------------------------
// DATA

let nextId = 8
let users = [
  {
    id: 1,
    name: 'Haidar'
  },
  {
    id: 2,
    name: 'Bara'
  },
  {
    id: 3,
    name: 'Ajin'
  },
  {
    id: 4,
    name: 'Sakti'
  },
  {
    id: 5,
    name: 'Jonathan'
  },
  {
    id: 6,
    name: 'Mario'
  },
  {
    id: 7,
    name: 'Fahri'
  }
]

// -----------------------------------------------------------------------------
// EXPRESS ROUTES/ENDPOINTS

// Get hello world
app.get('/', (req, res) => {
  res.send({
    message: 'Hello World'
  })
})

// List all users
app.get('/users', (req, res) => {
  res.send({
    message: 'List of users',
    data: users
  })
})

// Create new user
app.post('/users', (req, res) => {
  // Check if name in request body is exist
  if (req.body.name) {
    // Get new user data from request
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
  }
})

// -----------------------------------------------------------------------------
// RUN EXPRESS

app.listen(port, () => {
  console.log(`Express app is listening on localhost:${port}`)
})
