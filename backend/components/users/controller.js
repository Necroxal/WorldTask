const User = require('./model');
const response = require('../../utils/response');
const jwt = require('../../utils/jwt');
//bycript
const bcrypt = require('bcrypt');
const saltRounds = 10;


const createUser = async (req, res) => {
  //validation
  if (!req.body.name || !req.body.surname || !req.body.nickname || !req.body.password) {
    response.error(req, res, 'missing data', 440, 'fill remaining data');
    return;
  }

  const passEnc = req.body.password;
  const passCrypt = await bcrypt.hash(passEnc, saltRounds);


  const user = new User({
    name: req.body.name,
    surname: req.body.surname,
    nickname: req.body.nickname,
    password: passCrypt,
    email: req.body.email,
    position: req.body.position,
    image: req.file.originalname
  });



  User.find({
    $or: [
      { email: user.email.toLocaleLowerCase() },
      { nickname: user.nickname.toLocaleLowerCase() }
    ]
  }).then((data) => {

    if (data && data.length >= 1) {
      response.succes(req, res, 'user exist', 201);
    }
    else {
      user.save(user)
        .then(data => {
          response.succes(req, res, data, 201);
        })
        .catch(err => {
          response.error(req, res, 'Internal error', 500, err)
        });
    }

  }).catch((error) => {

    if (error) {
      return response.error(req, res, 'Internal Error', 500, error);
    }
  })

}

const userLogin = async (req, res) => {
  //get params
  if (!req.body.email || !req.body.password) {
    response.error(req, res, '', 400, 'missing email or password');
    return
  }

  //search databse if exist}
  User.findOne({ email: req.body.email })
    .then(data => {
      const pwd = bcrypt.compareSync(req.body.password, data.password);
      if (!pwd) {
        return response.error(req, res, 'Password incorrect', 400, 'Password incorrect');
      }
      const token = jwt.createToken(data);

      return res.status(200).send({
        status: 'Success',
        message: 'login successful',
        user: {
          id: data._id,
          name: data.name,
          nickname: data.nickname,
        },
        token
      });

    }).catch(err => {
      if (err || !data) {
        return response.error(req, res, 'Wrong email', 400, err);
      }
    })

}
const testUser = async(req,res)=>{
  return res.status(200).send({
    message: "The route test",
    user: req.user
  });
}
module.exports = {
  createUser,
  userLogin,
  testUser
}