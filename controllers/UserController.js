const express = require('express');
const router = express.Router();
const knex = require('../config/db');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/user')();
const Promise = require('promise');
const jwt = require('jsonwebtoken');
const config = require('../config/config.js');


const VerifyToken = require('../middleware/VerifyToken.js');


router.post('/register', async (req, res) => 
{                              
  if(!req.body)  
    res.json({isSuccess: false, message: 'Please send a valid form'});
  
  let validForm = User.ValidRegisterFormData(req.body, res);

  if(validForm)
      User.CheckDuplicatesHashAndSaveUser(req.body, res)
});
    
router.post('/login', async (req, res) => 
{
  try {

      let formData = req.body;
      let validForm = User.ValidLoginFormData(formData);
      if (!validForm) {
        res.json({isSuccess: false, message: 'Please provide a valid form'})
        return;
      }

      let user = await User.RetrieveUser(formData);
      if (!user) {
        res.json({isSuccess: false, message: 'Incorrect email or password'});
        return;
      }

      let token = await User.SetJwtToken(user);
      bcrypt.compare(formData.password, user.password, async function(err, match) {
        
        // LOGIN FAIL
        if (err) {
          res.json({isSuccess: false, message: 'Incorrect email or password'})
          return;
        }

        // LOGIN SUCCESS
        if(match) {
          res.status(200).json({
            isSuccess: true,
            message: 'Successfully logged in',
            token, 
            user
          })
        }
        else {
          res.json({isSuccess: false, message: 'Incorrect email or password'})
          return;
        }
    })
  }
  catch (err) {
    console.log('matchwer!', err)
    
    res.status(401).json({isSuccess: false, message: 'Incorrect email or password', err});
  }
});

router.get('/validate-jwt/', (req, res) => 
{
  let token = req.query.jwt;
  jwt.verify(token, config.secret, function(err, decoded) { 
  if (err) {
    console.log('invalid JWTFJG', err, token)
    res.json({ isSuccess: false, message: 'Your session has expired - Please Logout and Login again.'});
    return;
  }
  else {
    console.log('VALID JWT', token)
    res.status(200).json({isSuccess: true, message: 'User is authorized'})
    return;
  }
  })
})


router.get('/profile', VerifyToken, (req, res) => 
{
    User.FindUser(req.id, res);
    return;
});




module.exports = router;