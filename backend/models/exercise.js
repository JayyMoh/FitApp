const mongoose = require('mongoose')

const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    bodyPart: { type: String, required: true },
})

module.exports = mongoose.model('Exercise', exerciseSchema)