
const bcrypt = require('bcryptjs');
const knex = require('../config/db');
const jwt = require('jsonwebtoken');

const User = module.exports = function () {
// REGISTER REGISTER REGISTER REGISTER

function ValidRegisterFormData(formData, res) 
{  
    if (!formData.firstName)  res.json({isSuccess: false, message: 'Please provide a first name'});
    else if (!formData.lastName)  res.json({isSuccess: false, message: 'Please provide a last name'});
    else if (!formData.email)  res.json({isSuccess: false, message: 'Please provide an email'});
    else if (!formData.password)  res.json({isSuccess: false, message: 'Please provide a password'});
    else return true;
}

function CheckDuplicatesHashAndSaveUser(formData, res) 
{
    let tempEmail = formData.email.toLowerCase();
    return knex('peeps')
        .select()
        .where('email', tempEmail)
        .first()
        .then((duplicate) => {
            if(duplicate)
            {
                console.log('found duplicate', duplicate.email, tempEmail)
                res.json({isSuccess: false, message: 'An account with this email already exists'});
            }
            else 
            {
                HashPasswordSaveUser(formData, res);
            }
    });
};

function HashPasswordSaveUser(formData, res) 
{
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(formData.password, salt, (err, hash) => {
            if(err) res.json({isSuccess: false, message: err});
            password = hash;
            SaveUserToDB(formData, password, res);
        })
    })   
}

function SaveUserToDB(formData, hashPassword, res) 
{
   let tempEmail = formData.email.toLowerCase();
   knex('peeps')
   .returning('id')
   .insert
    ({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: tempEmail,
        password: hashPassword
    }).then((id) => {
        console.log('user was saved here is the ID', id[0])
        let token = jwt.sign({ id: id[0] }, process.env.secret, {
            expiresIn: ((86400 * 30) * 3) // SECONDS => expires in 3 months ((1 day x 30 days) x 3 days)
          })
          let user = formData;
          user.password = null;
        res.status(201).json({isSuccess: true, message: 'Successfully Registered', token, user})
    }).catch(err => {
        console.log(err)
    })
}


// FBOOK Auth

async function FBookAuth (fbookData) {
    // does a fbook user exist?
    let isUser = await DoesFBookUserExist(fbookData.email.toLowerCase())
    if (isUser) { //login existing user
        let token = jwt.sign({ id: isUser.id }, process.env.secret, {
            expiresIn: ((86400 * 30) * 3) // SECONDS => expires in 3 months ((1 day x 30 days) x 3 days)
          })
       return { isSuccess: true, user: isUser, token }
    }
    else { //register new user
        return await RegisterUserFromFbookAuth (fbookData)
    }
}

async function DoesFBookUserExist (email) {
    return await knex('peeps').select().returning('id').where('email', email).first().then(async userId => {
        return await userId
    }).catch(() => {
        return false
    })
}

async function RegisterUserFromFbookAuth (fbookData) {
    let catName = fbookData.name,
    seperator = " ",
    unCatName = catName.split(seperator) , 
    firstName = unCatName[0],
    lastName = unCatName[1],
    tempEmail = fbookData.email.toLowerCase()

    // changeHeight(fbookData.picture.data)

    watchSocUser = {
        firstName: firstName,
        lastName: lastName,
        email: tempEmail,
        password: 'fbookgenericpassword_watchsoc',
        imgSrc: fbookData.picture.data.url
    }
    
    return await knex('peeps')
   .returning('id')
   .insert(watchSocUser).then(async (id) => {
        console.log('user was saved here is the ID', id[0])
        let token = await jwt.sign({ id: id[0] }, process.env.secret, {
            expiresIn: ((86400 * 30) * 3) // SECONDS => expires in 3 months ((1 day x 30 days) x 3 days)
          })
        return {isSuccess: true, message: 'Successfully Registered', token, user: watchSocUser} 
    }).catch(err => {
        console.log(err)
    })
}

function changeHeight (img) {
    img.height = 200
    img.width = 200
}

//END FBook Auth

// LOGIN LOGIN LOGIN LOGIN

function ValidLoginFormData(formData) 
{  
    if(!formData || !formData.email || !formData.password) return false;
    return true;
}

const RetrieveUser = async function(formData) 
{
    let tempEmail = formData.email.toLowerCase();
    return await knex('peeps')
        .select()
        .where('email', tempEmail)
        .first()
        .then((user) => {
            return user;
        }).catch(err => {
            console.log('no bueno', err)
            return 'err';  
    })
}

async function SetJwtToken(user) 
{
    if(!user) return false;
    let token = await jwt.sign({ id: user.id }, process.env.secret, {
        expiresIn: 86400 // expires in 24 hours
      })
      return token     
}


// END LOGIN

function FindUser(id, res)
{
    knex('peeps').where(
        'id', id
        )
        .first().then(function(user)
        {
            res.status(200).json({isSuccess: true, message: 'User is valid', user})
        }
    ).catch(() => {
        res.status(403).json({isSuccess: false, message: 'User is invalid'})
    })
} 

    return {
        // REGISTER
        ValidRegisterFormData,
        CheckDuplicatesHashAndSaveUser,
        SaveUserToDB,
        
        // LOGIN
        ValidLoginFormData,
        RetrieveUser,
        SetJwtToken,
        FindUser,

        // FBook Auth
        FBookAuth

    }
}
