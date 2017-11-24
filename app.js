let express = require('express')
let app = express()

app.get('/', (req, res) => {
  res.send(`Hello World. Request Info: ${JSON.stringify(req.headers)}`)
})

app.listen(4000)