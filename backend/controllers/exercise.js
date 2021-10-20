const express = require('express')
const exercise = express.Router()

const Exercise = require('../models/exercise')


exercise.get('/', (req, res) => {
    Exercise.find({}, (err, foundExercise) => {
        if (err) {
            res.status(400),json({error: err.message})
        }
        res.status(200).send(foundExercise)
    })
})

exercise.post('/', (req, res) => {
    Exercise.create(req.body, (err, createdExercise) => {
        if (err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).send(createdExercise)
    })
})

exercise.put('/:id', (req, res) => {
    Exercise.findByIdAndUpdate(req.params.id, req.body, { new:true }, (err, updatedExercise) => {
        if (err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).send(createdExercise)
    })
})

exercise.put('/:id', (req, res) => {
    Exercise.findByIdAndUpdate(req.params.id, req.body, { new:true }, (err, updatedExercise) => {
        if (err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).send(updatedExercise)
    })
})

exercise.delete('/:id', (req, res) => {
    Exercise.findByIdAndRemove(req.params.id, (err, deletedExercise) => {
        if (err) {
            res.status(400).json({error: err.message})
        }
        res.status(200).json({
            'deleted_exercise': deletedExercise
        })
    })
})



module.exports = exercise