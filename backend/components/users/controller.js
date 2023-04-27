const User = require('./model');
const response = require('../../utils/response');

const createUser =  (req, res) => {
    //validation
    if (!req.body.name || !req.body.surname || !req.body.nickname || !req.body.password) {
      response.error(req, res, 'missing data', 440, 'fill remaining data');
      return;
    }
    const user = new User({
      name: req.body.name,
      surname: req.body.surname,
      nickname: req.body.nickname,
      password: req.body.password,
      email: req.body.email,
      position: req.body.position,
      image: req.file. originalname
    });

    console.log(req.file);

    user.save(user)
    .then(data=>{
      repsonse.succes(req,res,data,201);
    })
    .catch(err => {
      repsonse.error(req,res,'Internal error',500, err)
    });
   

  }
  
  
  
  module.exports = {
    createUser,
  
  }