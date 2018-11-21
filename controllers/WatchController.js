const express = require('express');
const router = express.Router();
const knex = require('../config/db');
const Promise = require('promise');
const WatchModel = require('../models/watch.js');

const VerifyToken = require('../middleware/VerifyToken.js');


router.post('/', VerifyToken, async (req, res) => {
    let formData = req.body;
    console.log('soup', req.body)
    if (WatchModel.validateWatchFormData(formData, res));
        WatchModel.saveWatchToCollectionDB(formData, req.id, res); 
});

// ?id="id"
router.put('/', VerifyToken, (req, res) => {
    let id = req.query.id
    let formData = req.body;
    WatchModel.updateWatchById(id, formData, res);
});

router.get('/', VerifyToken, async (req, res) => {
    try
    {   
        return await knex('watch')
            .orderBy('order', 'asc')
            .where('user_id', req.id)
            .then(collection => { 
                collection.forEach(watch => {
                    watch.src.images.sort((a, b) => {
                        console.log(a, b)
                        return a.order - b.order;
                    })
                })
            res.status(200).json({collection});
        })
    }
    catch
    {   
        return res.status(500).json({isSuccess: false, message: 'Could not get collection at this time'})
    } 
});

router.get('/number-fsot', VerifyToken, async (req, res) => {
    try
    {   
        return knex('watch')
            .where('user_id', req.id)
            .andWhere(function() {
                this.where('isForSale', true)
                .andWhere('isForTrade', true)
            })
            .then(collection => { 
                let numberFSOT = collection.length
                res.status(200).json({numberFSOT})
        }) 
    }
    catch
    {   
        res.status(500).json({isSuccess: false, message: 'Could not get collection at this time'})
    } 
})

module.exports = router;