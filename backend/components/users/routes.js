const express = require('express');
const controller = require('./controller');
const router = express.Router();
const {uploadImage} = require('../../middleware/multer');

router.post('/create',uploadImage() ,controller.createUser);


module.exports = router;