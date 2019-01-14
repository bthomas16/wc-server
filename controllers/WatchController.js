const express = require('express');
const router = express.Router();
const knex = require('../config/db.js');
const Promise = require('promise');
const WatchModel = require('../models/watch.js');

const VerifyToken = require('../middleware/VerifyToken.js');


router.post('/', VerifyToken, async (req, res) => {
    let formData = req.body;
    let form = WatchModel.validateWatchFormData(formData);
    if (form.isSuccess) {
        await WatchModel.saveWatchToCollectionDB(formData, req.id, res); 
    }
    else {
        res.json({isSuccess: form.isSuccess, message: form.message})
    }
});

// ?id="id"
router.put('/', VerifyToken, async (req, res) => {
    let id = req.query.id;
    let formData = req.body;
    formData.src.images.forEach((image, index) => {
        image.order = index;
    });
    await WatchModel.updateWatchById(id, formData, res);
});

router.get('/', VerifyToken, async (req, res) => {
    try
    {   
        return await knex('watch')
            .orderBy('order', 'asc')
            .where('user_id', req.id)
            .andWhere('isStillInCollection', true)
            .then(collection => { 
                collection.forEach(watch => {
                    watch.src.images.sort((a, b) => {
                        return a.order - b.order;
                    })
                })             
            res.status(200).json({isSuccess:true, message: 'Collection retrieved', collection});
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
                .andWhere('isStillInCollection', true)
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

router.get('/removed', VerifyToken, (req, res) => {
    // try
    // {   
        let id = req.query.id; // watch id
        
        return knex.select('*')
        .from('user_watch_removed')
        .where('user_watch_removed.user_id', req.id)
        .fullOuterJoin('watch', 'user_watch_removed.watch_id', 'watch.id')
        .then(collection => { 
            collection.forEach(watch => {             
            res.status(200).json({collection: collection[0]});
        })
    })
    // }
    // catch
    // {   
    //     return res.status(500).json({isSuccess: false, message: 'Could not get collection at this time'})
    // } 
});


module.exports = router;