const mongoose = require('mongoose')

const modelSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    alternative_names: {
        type: [String],
    },
    gender: {
        type: String,
        required: true,
        trim: true
    },
    house: {
        type: String,
        trim: true
    },
    dateOfBirth: {
        type: String,
        trim: true
    },
    yearOfBirth: {
        type: String,
    },
    wizard: {
        type: Boolean,
    },
    ancestry: {
        type: String,
        trim: true,
    },
    eyeColour: {
        type: String,
        trim: true,
    },
    hairColour: {
        type: String,
        trim: true,
    },
    wand: Object,
    patronus: {
        type: String,
        trim: true,
    },
    hogwartsStudent: {
        type: Boolean,
    },
    hogwartsStaff: {
        type: Boolean
    },
    actor: {
        type: String,
    },
    alternative_actors: {
        type: [String]
    },
    alive: {
        type: Boolean
    }
}, {
    collection: 'models',
    id: false,
    versionKey: false,
    toObject: {
        retainKeyOrder: true
    },
    toJSON: {
        retainKeyOrder: true
    }
})

// Hide properties of objects
modelSchema.methods.toJSON = function () {
    const model = this
    const modelObject = model.toObject()
    delete modelObject._id
    delete modelObject.__v

    return modelObject
}


const Model = mongoose.model('Model', modelSchema)

module.exports = Model