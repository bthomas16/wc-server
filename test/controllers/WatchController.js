'use strict';

const chai = require('chai');
const expect = require('chai').expect;
const assert = require('chai').assert;
const knex = require('../../config/db.js');
const jwt = require('jsonwebtoken');

chai.use(require('chai-http'));

const app = require('../../app.js');

describe('User Watches - API', function() {
    this.timeout(5000);
    let token;

    before(function() {
        // would normally lookup user by ID to get user.id
        token = jwt.sign({ id: 987654321 }, process.env.secret, {
            expiresIn: ((86400 * 30) * 3) // SECONDS => expires in 3 months ((1 day x 30 days) x 3 days)
          })
    });

    after(async function() {
        await knex('watch').where('user_id', 987654321).del()
    });

    it("Should Fail Adding a New Watch - watch must have a name", function() {
        return chai.request(app)
            .post('/api/watch')
            .set({
                'Content-Type': 'application/json',
                'authorization': token
            })
            .send({
                    name: '',
                    src: {
                        images: [{
                            src: 'https:/testimage.jpg'
                        }]
                    }
                })
            .then(function(res) {
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
                assert.equal(res.body.isSuccess, false, 'success should be false');
                assert.equal(res.body.message, 'Please provide a watch name');
            });
    });

    it("Should Fail Adding a New Watch - watch must have a photo", function() {
        return chai.request(app)
            .post('/api/watch')
            .set({
                'Content-Type': 'application/json',
                'authorization': token
            })
            .send({
                user_id: 987654321,
                name: 'TestName',
                src: {
                    images: [{
                        src: ''
                    }]
                }
            })
            .then(function(res) {
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
                assert.equal(res.body.isSuccess, false, 'success should be false');
                assert.equal(res.body.message, 'Please provide a watch photo');
            });
    });

    it("Should Succeed Adding a watch - watch saved successfully", function() {
        return chai.request(app)
            .post('/api/watch')
            .set({
                'Content-Type': 'application/json',
                'authorization': token
            })
            .send({
                user_id: 987654321,
                name: 'TestName',
                src: {
                    images: [{
                        src: process.env.VUE_APP_ROOT_API + '/api/static-assets/oc-featured.png'
                    }]
                },
                watchStyle: 'diver',
                band: 'leather',
                sizeWidth: '44',
                sizeHeight: '13',
                order: 1,
                isFullKit: true,
                isForSale: true,
                isForTrade: true,
                isStillInCollection: true,
            })
            .then(function(res) {
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
                assert.equal(res.body.isSuccess, true, 'success should be true');
                assert.equal(res.body.message, 'Watch saved to Collection');
            });
    });

    it("Should Succeed Editing a Watch - watch edited successfully", function() {
        return chai.request(app)
            .put('/api/watch?id=2')
            .set({
                'Content-Type': 'application/json',
                'authorization': token
            })
            .send({
                name: 'TestName_Edited',
                src: {
                    images: [{
                        src: `${process.env.ROOT_API}/api/static-assets/tcm-featured.jpg`
                    },
                    {
                        src: `${process.env.ROOT_API}/api/static-assets/tcm-white-featured.jpg`
                    }]
                },
                watchStyle: 'orienteering',
                band: 'leather',
                sizeWidth: '44',
                sizeHeight: '14',
                order: 1,
                isFullKit: true,
                isForSale: true,
                isForTrade: true,
                isStillInCollection: true,
            })
            .then(function(res) {
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
                assert.equal(res.body.isSuccess, true, 'success should be true');
                assert.equal(res.body.message, 'Watch edited successfully');
            });
    });

    it("Should GET all watches in collection - watch collection retrieved successfully", function() {
        return chai.request(app)
            .get('/api/watch')
            .set({
                'Content-Type': 'application/json',
                'authorization': token
            })
            .then(function(res) {
                console.log(res.body)
                expect(res).to.be.json;
                expect(res.body).to.be.an('object');
                assert.equal(res.body.isSuccess, true, 'success should be true');
                assert.isNotNull(res.body.collection)
            });
    });
});