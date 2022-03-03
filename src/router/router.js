const express = require('express')
const Model = require('../model/model')

const router = new express.Router()

// GET requests
router.get('/', async (req, res) => {
    res.send('index.html')
})
router.get('/characters', async (req, res) => {
    try {
        const characters = await Model.find({})
        res.status(200).send(characters)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.get('/characters/students', async (req, res) => {
    try {
        const characters = await Model.find({
            hogwartsStudent: true
        })  
        res.status(200).send(characters)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.get('/characters/staffs', async (req, res) => {
    try {
        const characters = await Model.find({
            hogwartsStaff: true
        })  
        res.status(200).send(characters)
    } catch (e) {
        res.status(400).send(e)
    }
})
router.get('/characters/house/:house', async(req, res) => {
    const houseCharacters = req.params.house
    console.log(houseCharacters)
    try {
        const characters = await Model.find({
            house: houseCharacters
        })
        res.status(200).send(characters) 
    } catch (e) {
        res.status(400).send(e)
    }
})

// POST request
router.post('/characters', async (req, res)=> {
    const newCharacter = new Model({
        name: req.body.name,
        alternative_names: req.body.alternative_names,
        gender: req.body.gender,
        house: req.body.house,
        dateOfBirth: req.body.dateOfBirth,
        yearOfBirth: req.body.yearOfBirth,
        wizard: req.body.wizard,
        ancestry: req.body.ancestry,
        eyeColour: req.body.eyeColour,
        hairColour: req.body.hairColour,
        wand: req.body.wand,
        patronus: req.body.patronus,
        hogwartsStudent: req.body.hogwartsStudent,
        hogwartsStaff: req.body.hogwartsStaff,
        actor: req.body.actor,
        alive: req.body.alive,
    })
    try {
        await newCharacter.save()
        res.status(201).send(newCharacter)
    } catch (e) {
        console.log(e)
        res.status(400).send(e)
    }
})


module.exports = router