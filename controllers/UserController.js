const express = require('express');
const router = express.Router();
const knex = require('../config/db.js');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const User = require('../models/user')();
const Promise = require('promise');
const jwt = require('jsonwebtoken');


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
        return res.json({isSuccess: false, message: 'Please provide a valid form'})
      }

      let user = await User.RetrieveUser(formData);
      if (!user) {
        return res.json({isSuccess: false, message: 'Incorrect email or password'});
      }

      let token = await User.SetJwtToken(user);
      bcrypt.compare(formData.password, user.password, async function(err, match) {
        
        // LOGIN FAIL
        if (err) {
          return res.json({isSuccess: false, message: 'Incorrect email or password'})
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
          return res.json({isSuccess: false, message: 'Incorrect email or password'})
        }
    })
  }
  catch (err) {
    console.log('matchwer!', err)
    
    return res.status(401).json({isSuccess: false, message: 'Incorrect email or password', err});
  }
});

router.get('/validate-jwt/', (req, res) => 
{
  let token = req.query.jwt;
  if (!token) {
    console.log('no token', token)
    res.json({isSuccess: false, message: 'Pleasge login to access your profile'});
  }
  else {
    jwt.verify(token, process.env.secret, function(err, decoded) { 
      if (err) {
        console.log('Invalid JWT, please try again')
        res.json({ isSuccess: false, message: 'Your session has expired - Please Logout and Login again.'});
        return;
      }
      else {
        console.log('VALID JWT', token)
        res.status(200).json({isSuccess: true, message: 'User is authorized'})
        return;
      }
    })
  } 
});

router.get('/validate-email', VerifyToken, async (req, res) => {
  let userId = req.id
  let email = req.query.email
  let duplicateEmail = await knex.select('email').from('peeps').where('email', email).andWhereNot('id', userId).first()

  if (!duplicateEmail) {
    res.json({isSuccess: true})
  }
  else {
    res.json({isSuccess: false})
  }
  
})


router.get('/profile', VerifyToken, (req, res) => {
    User.FindUser(req.id, res);
    return;
});


router.put('/edit', VerifyToken, (req, res) => {
  try {
    let formData = req.body;
    let userId = req.id;   
    
    // user is trying to update password
    if (formData.newPassword) {
      knex('peeps').where('id', userId).first().then(user => {
        bcrypt.compare(formData.oldPassword, user.password, function(error, match) {
          if (match) {
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(formData.newPassword, salt, (err, hash) => {
                if(err) res.json({isSuccess: false, message: err});
                formData.password = hash;
                let updatedUser = UpdateUser(formData, userId);
                if (updatedUser) {
                  res.json({isSuccess: true, message: 'User successfully updated'})
                  return;
                }
              })
            })
          }  
          // OLD PASSWORD IS NOT A MATCH
          else {
            console.log('got here now', error, match)
            res.json({isSuccess: false, message: 'Old password is not correct'})
          }
        })
      }).catch(err => {
        console.log('err', err);
        res.json({isSuccess: false, message: 'User failed to update', err}); 
        return;
      })
    }

    // user updating anything except password
    else {
      let updatedUser = UpdateUser(formData, userId);
       if (updatedUser) {
        res.json({isSuccess: true, message: 'User successfully updated'})
        return;
       }
       else {
        res.json({isSuccess: false, message: 'User failed to updated'})
        return;
       }
    }
    
  } 
  catch (err) {
    console.log(err)
  }
});

async function ValidateAndFormGetUser(formData) {
    let validForm = await User.ValidLoginFormData(formData);
    let returnObj;
    if (!validForm) {
      returnObj = { isSuccess: false, message: 'Please provide a valid form'};
    }

    let user = await User.RetrieveUser(formData);
    if (!user) {
      returnObj = { isSuccess: false, message: 'Incorrect email or password'};
    }

    else returnObj = { isSuccess: true, message: 'Should login now', user};
    return returnObj;
}

const UpdateUser = async function(formData, userId){
    await knex('peeps').where('id', userId).returning('*').update({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
      imgSrc: formData.imgSrc
    }).then(user => {
      return user;
    }).catch(err => {
      return err;      
    })
}

const CompareHash = function(formPassword, user, token){
  
}




module.exports = router;