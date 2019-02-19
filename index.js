const express = require('express')
const app = express()
const port = 8000

const users = [
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

// GET http://localhost:8000/
app.get('/', (req, res) => {
  res.send({
    message: 'Hello World'
  })
})

app.get('/users', (req, res) => {
  res.send({
    message: 'List of users',
    data: users
  })
})

app.listen(port, () => {
  console.log(`Express app is listening on localhost:${port}`)
})
