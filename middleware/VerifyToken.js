var jwt = require('jsonwebtoken');
var config = require('../config.js');

function verifyToken(req, res, next) 
{
  var token = req.headers['authorization'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, config.secret, function(err, decoded) {
    if(err) {
      res.status(500).json({isSuccess: false, message:'Logout to Login'})
      next(false);
      // return false;
    }
    if(!err) {
      req.id = decoded.id;
      next();
    }
  });
}
module.exports = verifyToken;