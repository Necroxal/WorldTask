const express = require('express');
const controller = require('./controller');
const router = express.Router();

router.post('/create',uploadImage(), controller.createPlace);