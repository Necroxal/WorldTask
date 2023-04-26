const { Schema, model } = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    position: {
        type: String,
    },
    image: {
        type: Buffer,
    }
});


const model = mongoose.model('User', User);
module.exports = model;