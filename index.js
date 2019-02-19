const express = require('express')
const app = express()
const port = 8000

// GET http://localhost:8000/
app.get('/', (req, res) => {
  res.send({
    message: 'Hello World'
  })
})

app.listen(port, () => {
  console.log(`Express app is listening on localhost:${port}`)
})
