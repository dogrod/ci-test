let express = require('express')
let app = express()

app.get('/', (req, res) => {
  res.send(`Hello World. Request Info: ${req.headers} ${req.body}`)
})

app.listen(4000)