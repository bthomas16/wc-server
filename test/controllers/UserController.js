'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const assert = require('chai').assert;
const knex = require('../../config/db.js');

const bcrypt = require('bcryptjs');
chai.use(require('chai-http'));

const app = require('../../app.js');

describe('User Authentication - API', function() {
    this.timeout(5000);

    after(function() {
        knex('peeps').where('email', 'jb@g.com').del().then(() => {
            console.log('Record Deleted')
        })
    });
    
    // LOGIN TESTS
    describe('User Login', function() {

        it("Should Fail Login - blank form data", function() {
            return chai.request(app)
                .post('/api/user/login')
                .send({
                    email: '',
                    password: ''
                })
                .then(function(res) {
                    expect(res).to.be.json;
                    expect(res.body).to.be.an('object');
                    assert.equal(res.body.isSuccess, false, 'success should be false');
                    assert.equal(res.body.message, 'Please provide a valid form', 'No empty form fields');
                });
        });

        it("Should Fail Login - blank form data (password)", function() {
            return chai.request(app)
                .post('/api/user/login')
                .send({
                    email: 'we@g.com',
                    password: ''
                })
                .then(function(res) {
                    expect(res).to.be.json;
                    expect(res.body).to.be.an('object');
                    assert.equal(res.body.isSuccess, false, 'success should be false');                
                    assert.equal(res.body.message, 'Please provide a valid form', 'No empty form fields')
                });
        });

        it("Should Fail Login - incorrect user data", function() {
            return chai.request(app)
                .post('/api/user/login')
                .send({
                    email: 'wes@g.com',
                    password: 'boo'
                })
                .then(function(res) {
                    expect(res).to.be.json;
                    expect(res.body).to.be.an('object');
                    assert.equal(res.body.isSuccess, false, 'success should be false');                
                    assert.equal(res.body.message, 'Incorrect email or password', 'Incorrect email, user does not exists')
                });
        });

        it("Should Fail Login - password is incorrect", function() {
            return chai.request(app)
                .post('/api/user/login')
                .send({
                    email: 'we@g.com',
                    password: 'boob'
                })
                .then(function(res) {
                    expect(res).to.be.json;
                    expect(res.body).to.be.an('object');
                    assert.equal(res.body.isSuccess, false, 'success should be false');
                    assert.equal(res.body.message, 'Incorrect email or password', 'Incorrect password')
                });
        });

        it("Should Login User Successfully", function() {
            return chai.request(app)
                .post('/api/user/login')
                .send({
                    email: 'we@g.com',
                    password: 'boobs'
                })
                .then(function(res) {
                    expect(res).to.have.status(200);
                    expect(res).to.be.json;
                    expect(res.body).to.be.an('object');
                    assert.equal(res.body.isSuccess, true, 'success should be true');                
                    assert.equal(res.body.user.firstName, 'Larry', 'first name of User should be Larry')
                });
            });
        });

        









    describe('User Register', function() {
        
            // REGISTER TESTS
        
            it("Should Fail Register - prompt for first name", function() {
                return chai.request(app)
                    .post('/api/user/register')
                    .send({
                        firstName: '',
                        lastName: 'Cooter',
                        email: 'jb@g.com',
                        password: 'pass'
                    })
                    .then(function(res) {
                        expect(res).to.have.status(200);
                        expect(res).to.be.json;
                        expect(res.body).to.be.an('object');
                        assert.equal(res.body.isSuccess, false, 'success should be false');
                        assert.equal(res.body.message, 'Please provide a first name', 'Empty form fields should prompt for firstName');
                    });
            });
        
            it("Should Fail Register - prompt for last name", function() {
                return chai.request(app)
                    .post('/api/user/register')
                    .send({
                        firstName: 'JimBob',
                        lastName: '',
                        email: 'jb@g.com',
                        password: 'pass'
                    })
                    .then(function(res) {
                        expect(res).to.have.status(200);
                        expect(res).to.be.json;
                        expect(res.body).to.be.an('object');
                        assert.equal(res.body.isSuccess, false, 'success should be false');
                        assert.equal(res.body.message, 'Please provide a last name', 'Empty form fields should prompt for email');
                    });
            });
        
            it("Should Fail Register - prompt for email", function() {
                return chai.request(app)
                    .post('/api/user/register')
                    .send({
                        firstName: 'JimBob',
                        lastName: 'Cooter',
                        email: '',
                        password: 'pass'
                    })
                    .then(function(res) {
                        expect(res).to.have.status(200);
                        expect(res).to.be.json;
                        expect(res.body).to.be.an('object');
                        assert.equal(res.body.isSuccess, false, 'success should be false');
                        assert.equal(res.body.message, 'Please provide an email', 'Empty form fields should prompt for email');
                    });
                });
        
            it("Should Fail Register - prompt for password", function() {
                return chai.request(app)
                    .post('/api/user/register')
                    .send({
                        firstName: 'JimBob',
                        lastName: 'Cooter',
                        email: 'jb@g.com',
                        password: ''
                    })
                    .then(function(res) {
                        expect(res).to.have.status(200);
                        expect(res).to.be.json;
                        expect(res.body).to.be.an('object');
                        assert.equal(res.body.isSuccess, false, 'success should be false');
                        assert.equal(res.body.message, 'Please provide a password', 'Empty form fields should prompt for email');
                    });
            });
        
            it("Should Succesfully Register", function() {
                return chai.request(app)
                    .post('/api/user/register')
                    .send({
                        firstName: 'JimBob',
                        lastName: 'Cooter',
                        email: 'jb@g.com',
                        password: 'pass'
                    })
                    .then(function(res) {
                        expect(res).to.have.status(201);
                        expect(res).to.be.json;
                        expect(res.body).to.be.an('object');
                        assert.equal(res.body.isSuccess, true, 'success should be true');
                        assert.equal(res.body.message, 'Successfully Registered', 'Successful account registration');
                    });
            });
        
            it("Should Not Allow Duplicate Users to register", function() {
                return chai.request(app)
                    .post('/api/user/register')
                    .send({
                        firstName: 'JimBob',
                        lastName: 'Cooter',
                        email: 'jb@g.com',
                        password: 'pass'
                    })
                    .then(function(res) {
                        expect(res).to.have.status(200);
                        expect(res).to.be.json;
                        expect(res.body).to.be.an('object');
                        assert.equal(res.body.isSuccess, false, 'success should be false');
                        assert.equal(res.body.message, 'An account with this email already exists', 'Duplicate users cannot be registered');
                    });
                });
        });
    });


