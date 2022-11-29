require('dotenv').config({ path: './.env' })

const express = require('express')
const cors = require('cors')
const db = require('./src/connections/mongo')

const PORT = process.env.PORT || 4000
const app = express()

app.use(cors())
app.use(express.json())
app.use(require('./src/routes/student-route'))

app.get('/', (req, res) => {
  res.status(200)
  res.send('')
})

db.connectMongo(process.env.MONGO_URL, function (err) {
  if (err) {
    console.error(err)
    process.exit()
  }

  app.listen(PORT, (error) => {
    if (!error) console.log(`Server is running on port: ${PORT}`)
    else console.log("Error occurred, server can't start", error)
  })
})
