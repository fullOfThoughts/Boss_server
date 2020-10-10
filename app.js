const express = require('express')
const app = express()

const router = require('./route')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(router)
app.use((req, res, next) => {
  res.send('error')
})
app.listen(4000, () => {
  console.log('服务器启动成功')
})
