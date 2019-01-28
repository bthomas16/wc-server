const express = require('express');
const router = express.Router();
const knex = require('../config/db.js');
const Promise = require('promise');

const VerifyToken = require('../middleware/VerifyToken.js');

router.put('/', VerifyToken, (req, res) => {
    let watchId = req.query.id;
    removeWatchFalseInCollectionFlag(watchId, res)
 })
 
 // change watch to be owned to no user
 function removeWatchFalseInCollectionFlag(id, res) {
     knex('watch').where('id', id).returning('*').update({
         isStillInCollection: false
     }).then(watchUpdated => {
         res.status(200).json({ watch: watchUpdated[0]})
     })
 }
 
 // Add watch to collection of formerly owned watches
 router.post('/', VerifyToken, async (req, res) => {
     let watch = req.body;
     console.log(watch, 'fucking here')
     knex('user_watch_removed').returning('*').insert({
         user_id: req.id,
         watch_id: watch.watchToRemove.id,
         typeMoved: watch.reasonsWatchMoved.typeMoved,
         receivedBy: watch.reasonsWatchMoved.receivedBy,
         receivedInReturn: watch.reasonsWatchMoved.receivedInReturn,
         value: watch.reasonsWatchMoved.value
     }).then(watch => {
         return res.status(201).json({ watch })
     })
 })

 router.get('/', VerifyToken, async (req, res) => {
     let id = req.id;
    knex.select('*')
     .from('watch')
     .where('watch.user_id', id)
     .andWhere('isStillInCollection', false)
     .fullOuterJoin('watch', 'user_watch_favorited.watch_id', 'watch.id')
 })

 module.exports = router;