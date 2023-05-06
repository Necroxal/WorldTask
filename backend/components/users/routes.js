const express = require('express');
const controller = require('./controller');
const router = express.Router();
const {uploadImage} = require('../../middleware/multer');

router.post('/create',uploadImage() ,controller.createUser);
router.post('/login', controller.userLogin);

module.exports = router;