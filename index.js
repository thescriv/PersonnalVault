const express = require('express')
const cors = require('cors')

const config = require('./config')

const { addPassword } = require('./src/addPassword')
const { listPassword } = require('./src/listPassword')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', (req, res, next) => {
  next()
})

app.post('/api/addPassword', addPassword)
app.get('/api/listPassword', listPassword)

app.listen(config.PORT, () => {
  console.log(`Listenning port : ${config.PORT}`)
})
