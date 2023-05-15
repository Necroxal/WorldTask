const express = require('express');
const controller = require('./controller');
const router = express.Router();
const {uploadImage} = require('../../middleware/multer');
const check = require('../../middleware/auth');



router.post('/create',uploadImage() ,controller.createUser);
router.post('/login', controller.userLogin);
router.get('/test',check.auth, controller.testUser);
module.exports = router;