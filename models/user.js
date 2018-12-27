const bcrypt = require('bcryptjs');
const knex = require('../config/db.js');
const jwt = require('jsonwebtoken');
const config = require('../config/config');

const User = module.exports = function () {

    // REGISTER REGISTER REGISTER REGISTER

    function ValidRegisterFormData(formData) 
    {  
        if (!formData.firstName)  return {isSuccess: false, message: 'Please provide a first name'};
        else if (!formData.lastName) return {isSuccess: false, message: 'Please provide a last name'};
        else if (!formData.email) return {isSuccess: false, message: 'Please provide an email'};
        else if (!formData.password) return {isSuccess: false, message: 'Please provide a password'};
        else return {isSuccess: true, message: 'Form is valid'};;
    }

    async function CheckDuplicatesHashAndSaveUser(formData) 
    {
        let tempEmail = formData.email.toLowerCase();
        return await knex('peeps')
            .select()
            .where('email', tempEmail)
            .first()
            .then((duplicate) => {
                if(duplicate)
                {
                    console.log('found duplicate', duplicate.email, tempEmail)
                    return {isSuccess: false, message: 'An account with this email already exists'} ;
                }
                else 
                {
                    return bcrypt.genSalt(10, (err, salt) => {
                        return bcrypt.hash(formData.password, salt, (err, hash) => {
                            if(err) {
                                return {isSuccess: false, message: err };
                            }
                            else {
                                SaveUserToDB(formData, hash);
                            }
                        })
                    })   
                    
                }
            });
    };

    function HashPassword(formData) 
    {
        return new Promise(function(resolve, reject) {
            
        }) 
    }

    async function SaveUserToDB(formData, hashPassword) 
    {
       let tempEmail = formData.email.toLowerCase();
       return await knex('peeps')
        .returning('id')
        .insert
        ({
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: tempEmail,
            password: hashPassword
        }).then(async (id) => {
            console.log('user was saved here is the ID', id[0])
            let token = await jwt.sign({ id: id[0] }, config.secret, {
                expiresIn: 180800 // expires in 24 hours
              })
              let user = formData;
              user.password = null;
            return { isSuccess: true, message: 'Successfully Registered', token, user };
        }).catch(err => {
            return { isSuccess: false, message: err}
        })
    }

    // LOGIN LOGIN LOGIN LOGIN

    function ValidLoginFormData(formData) 
    {  
        if(!formData || !formData.email || !formData.password) return false;
        return true;
    }

    async function RetrieveUser(formData) 
    {
        let tempEmail = formData.email.toLowerCase();
        return await knex('peeps')
            .select()
            .where('email', tempEmail)
            .first()
            .then(async (user) => {
                return await user;
            }).catch(err => {
                console.log('no bueno', err)
                return 'err';  
        })
    }

    function SetJwtToken(user) {
        return new Promise(function(resolve, reject) {
            if(!user) reject();
            else {
                let token = jwt.sign({ id: user.id }, config.secret, {
                    expiresIn: 86400 // expires in 24 hours
                })
                resolve(token);
            }
        })
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
        FindUser
    }
}