const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const app = express()
const port = 8000 // set the default PORT

// -----------------------------------------------------------------------------
// EXPRESS PLUGINS

// Use body-parser into express, so we can get request body (req.body)
app.use(bodyParser.json())
app.use(helmet())
app.use(cors())

// -----------------------------------------------------------------------------
// EXPRESS ROUTES/ENDPOINTS

const root = require('./middlewares/index')
const users = require('./middlewares/users')

app.get('/', root.hello)
app.get('/users', users.getUsers)
app.post('/users', users.createNewUser)
app.delete('/users', users.deleteAllUsers)
app.delete('/users/:id', users.deleteOneUserById)
app.put('/users/:id', users.updateOneUserById)

// -----------------------------------------------------------------------------
// RUN EXPRESS

app.listen(port, () => {
  console.log(`Express app is listening on localhost:${port}`)
})
