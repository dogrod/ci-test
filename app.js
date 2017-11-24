let express = require('express')
let app = express()

app.get('/', (req, res) => {
  res.send(`Hello World. Request Info: ${req}`)
})

app.listen(4000)