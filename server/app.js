const express = require('express')
const route = require('./route/index')
const path = require('path')
// const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
// parse application/x-www-form-urlencoded
app.use('/server/public', express.static(path.resolve(__dirname, './public')))
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// app.use(cors())
app.use('/index', route)
app.listen(3000, () => {
    console.log('3000....');
})