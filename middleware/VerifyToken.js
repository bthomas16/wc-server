var jwt = require('jsonwebtoken');
var config = require('../config/config');

function verifyToken(req, res, next) 
{
  var token = req.headers['authorization'];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err) res.status(401).json({ success: false, message: 'Your session has expired - Please Logout and Login again.'});
    req.id = decoded.id;
    next();
  });
}
module.exports = verifyToken;