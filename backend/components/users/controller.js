const createUser =  (req, res) => {
    let body = req.body;
    //validation
    if (!body.name || !body.nickname || !body.email || !body.password) {
      return response.error(req, res, 'missing data', 440, 'fill remaining data');
    }
   
   
  }
  
  
  
  module.exports = {
    createUser,
  
  }