module.exports = {
  // Response hello world
  hello: (req, res) => {
    res.send({
      message: 'Hello World'
    })
  }
}
