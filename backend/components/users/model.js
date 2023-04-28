const mongoose = require('mongoose');


const User = new mongoose.Schema({
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
        type: String
    }
});


const Model = mongoose.model('User', User);
module.exports = Model;