const express = require('express')
const mongoose = require('mongoose')

const APP = express()
const PORT = 3003

// Middleware
APP.use(express.json())

// Setup Mongo
mongoose.connect('mongodb://localhost:27017/exercise', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
mongoose.connection.once('open', () => {
    console.log('Connected to Mongo')
})


const exerciseController = require('./controllers/exercise')

APP.use('/exercise', exerciseController)

APP.listen(PORT, () => {
    console.log('Server is up and running on port', PORT)
})