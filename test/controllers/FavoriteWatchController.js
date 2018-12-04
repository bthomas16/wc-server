'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const assert = require('chai').assert;
const knex = require('../../config/db.js');
const jwt = require('jsonwebtoken');


chai.use(require('chai-http'));

const app = require('../../app.js');

describe('Favorite Watch - API', function() {
    // this.timeout(5000);

    // after(function() {
    //     knex('watch').where('user_id', ID).del().then(() => {
    //         console.log('Record Deleted')
    //     })
    // });
    
    // LOGIN TESTS
    describe('User Login, add watch to favorites', function() {

        async function getFakeJwt() {
            return await chai.request(app)
                .post('/api/user/login')
                .send({
                    email: 'we@g.com',
                    password: 'boobs'
                }).then(async function(res) {
                    return await res.body.token
                }
            )
        };

        const headers = { 
            'Content-Type': 'application/json',
            'authorization': getFakeJwt()
        };


        it("Add Watch to Favorites", function() {
            return chai.request(app)
                .post('/api/watch/favorite?watchId=987654321')
                .set(headers)
                .then(function(res) {
                    console.log(res.body.favorites)
                    expect(res).to.be.json;
                    assert.equal(res.body.isSuccess, true, 'success should be true');
                    assert.equal(res.body.favorites[0].name, "Chillario");
                });
        });

        //         it("Remove Watch From Favorites", function() {
        //             return chai.request(app)
        //                 .post('/api/user/login')
        //                 .send({
        //                     email: 'we@g.com',
        //                     password: ''
        //                 })
        //                 .then(function(res) {
        //                     expect(res).to.be.json;
        //                     expect(res.body).to.be.an('object');
        //                     assert.equal(res.body.isSuccess, true, 'success should be true');                
        //                     assert.equal(res.body.message, 'Please provide a valid form', 'No empty form fields')
        //                 });
        //         });

                

        //         it("Should Login User Successfully", function() {
        //             return chai.request(app)
        //                 .post('/api/user/login')
        //                 .send({
        //                     email: 'we@g.com',
        //                     password: 'boobs'
        //                 })
        //                 .then(function(res) {
        //                     expect(res).to.have.status(200);
        //                     expect(res).to.be.json;
        //                     expect(res.body).to.be.an('object');
        //                     assert.equal(res.body.isSuccess, true, 'success should be true');                
        //                     assert.equal(res.body.user.firstName, 'Larry', 'first name of User should be Larry')
        //                 });
        //             });
        //         });
        });
    })


