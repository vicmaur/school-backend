const express = require('express')

const app = express()
const PORT = 3000

app.get('/', (req, res) => {
  res.status(200)
  res.send('')
})

app.listen(PORT, (error) => {
  if (!error) console.log('Server is successfully running, and App is listening on port ' + PORT)
  else console.log("Error occurred, server can't start", error)
})
