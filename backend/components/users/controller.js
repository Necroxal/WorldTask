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
      image: req.file.originalname
    });

    
    User.find({$or:[
      {email: user.email.toLocaleLowerCase()},
      {nickname: user.nickname.toLocaleLowerCase()}
    ]}).then((data)=>{

      if(data && data.length >= 1){
        response.succes(req,res,'user exist',201);
      }
      else{
         //console.log(req.file);
         user.save(user)
         .then(data=>{
           response.succes(req,res,data,201);
         })
         .catch(err => {
           response.error(req,res,'Internal error',500, err)
         });
      }
      
    }).catch((error)=>{
      
      if(error){
        return  response.error(req, res, 'Internal Error', 500, error);
      }
    })
   
  }
  
  
  
  module.exports = {
    createUser,
  
  }