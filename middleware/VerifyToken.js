var jwt = require('jsonwebtoken');

function verifyToken(req, res, next) 
{
  var token = req.headers['authorization'];
  if (!token) {
    console.log('no token', token)
    res.status(403).send({ auth: false, message: 'No token provided.'});
  }
  else {
    jwt.verify(token, process.env.secret, function(err, decoded) {
      if(err) {
        res.status(500).json({isSuccess: false, message:'Logout to Login'})
        next(false);
      }
      if(!err) {
        req.id = decoded.id;
        next();
      }
    })
  }
}




module.exports = verifyToken;