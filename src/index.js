const path = require('path')
const express = require('express')

require('dotenv').config()
require('./db/mongoose')

const router = require('./router/router')

const app = express()
const port = process.env.PORT

const publicDirectoryPath = path.join(__dirname, '../public') 
app.use(express.static(publicDirectoryPath))

app.use(express.json())

app.use(router)

app.listen(port, ()=>{
    console.log('Server is up at:', port)
})