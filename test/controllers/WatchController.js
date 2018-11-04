// 'use strict';

// const chai = require('chai');
// const expect = require('chai').expect;
// const assert = require('chai').assert;

// chai.use(require('chai-http'));

// const app = require('../../app.js');

// describe('User Login - API', function() {
//     this.timeout(5000);

//     before(function() {

//     });

//     after(function() {

//     });

//     it("Should Fail Adding a New Watch - prompt for email", function() {
//         return chai.request(app)
//             .post('/api/user/login')
//             .send({
//                 email: '',
//                 password: ''
//             })
//             .then(function(res) {
//                 expect(res).to.have.status(200);
//                 expect(res).to.be.json;
//                 expect(res.body).to.be.an('object');
//                 assert.equal(res.body.isSuccess, false, 'success should be false');
//                 assert.equal(res.body.message, 'Please provide an email', 'Empty form fields should prompt for email');
//             });
//     });

//     it("Should Fail Login - prompt for password", function() {
//         return chai.request(app)
//             .post('/api/user/login')
//             .send({
//                 email: 'we@g.com',
//                 password: ''
//             })
//             .then(function(res) {
//                 expect(res).to.have.status(200);
//                 expect(res).to.be.json;
//                 expect(res.body).to.be.an('object');
//                 assert.equal(res.body.isSuccess, false, 'success should be false');                
//                 assert.equal(res.body.message, 'Please provide a password', 'Empty form fields should prompt for password')
//             });
//     });

//     it("Should Fail Login - user does not exist", function() {
//         return chai.request(app)
//             .post('/api/user/login')
//             .send({
//                 email: 'wes@g.com',
//                 password: 'boo'
//             })
//             .then(function(res) {
//                 expect(res).to.have.status(200);
//                 expect(res).to.be.json;
//                 expect(res.body).to.be.an('object');
//                 assert.equal(res.body.isSuccess, false, 'success should be false');                
//                 assert.equal(res.body.message, 'User does not exist', 'Incorrect email, user does not exists')
//             });
//     });

//     it("Should Fail Login - password is incorrect", function() {
//         return chai.request(app)
//             .post('/api/user/login')
//             .send({
//                 email: 'we@g.com',
//                 password: 'boob'
//             })
//             .then(function(res) {
//                 expect(res).to.have.status(200);
//                 expect(res).to.be.json;
//                 expect(res.body).to.be.an('object');
//                 assert.equal(res.body.isSuccess, false, 'success should be false');
//                 assert.equal(res.body.message, 'Password is incorrect', 'Incorrect password')
//             });
//     });

//     it("Should Login User Successfully", function() {
//         return chai.request(app)
//             .post('/api/user/login')
//             .send({
//                 email: 'we@g.com',
//                 password: 'boo'
//             })
//             .then(function(res) {
//                 expect(res).to.have.status(200);
//                 expect(res).to.be.json;
//                 expect(res.body).to.be.an('object');
//                 assert.equal(res.body.isSuccess, true, 'success should be true');                
//                 assert.equal(res.body.user.firstName, 'boo', 'first name of User should be boo')
//             });
//         });
// });