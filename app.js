const express = require('express')
const morgan = require('morgan')

const PORT = process.env.PORT || 4000
const app = express()

app.use(morgan('dev'))

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST')
  next()
})

app.get('/engagement', (req, res) => {
  res.send(require('./data/target/engagement.js'))
})

app.listen(PORT, () => {
  console.log(`Target Console Mock API is running at http://127.0.0.1:${PORT}/`)
})

module.exports = app
