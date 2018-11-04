const express = require('express');
const router = express.Router();
const knex = require('../config/db');
const Promise = require('promise');
const WatchModel = require('../models/watch.js');

const VerifyToken = require('../middleware/VerifyToken.js');

function updateWatchOrder(id, index) {
    console.log('doot doot, id, index')
    return knex('watch').where('id', id).update({
        order: index
    })
}

// router.put('/', VerifyToken, async (req, res) => {
//     let collection = req.body;
//     collection.forEach(async (watch, index) => {
//         await updateWatchOrder(watch, index);
//     })
// });

router.put('/', VerifyToken, async (req, res) => {
    try
    {   
        console.log('ua, gotmme', req.body)
        let newCollection = req.body;
        newCollection.forEach(async (watch, index) => {
            console.log('boot', watch, index)
            await updateWatchOrder(watch.id, index);
        });
        res.status(201).json({collection: newCollection})
    }
    catch
    {   
        res.status(403).json({isSuccess: false, message: 'Could not get collection at this time'})
    } 
})

module.exports = router;