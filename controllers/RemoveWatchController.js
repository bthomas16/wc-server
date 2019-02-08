const express = require('express');
const router = express.Router();
const knex = require('../config/db.js');
const Promise = require('promise');

const VerifyToken = require('../middleware/VerifyToken.js');

router.put('/', VerifyToken, (req, res) => {
    let watchId = req.query.id;
    removeWatchNullUserId(watchId, res)
 })
 
 // change watch to be owned to no user
 function removeWatchNullUserId(id, res) {
     knex('watch').where('id', id).returning('id').update({
         isStillInCollection: false
     }).then((id) => {
         res.json({ isSuccess: true, id: id[0]})
     })
 }
 
 // Add watch to collection of formerly owned watches
 router.post('/', VerifyToken, async (req, res) => {
     let watch = req.body;
     console.log('server watch to remove', watch)
     knex('user_watch_removed').returning('*').insert({
         user_id: req.id,
         watch_id: watch.watchToRemove.id,
         typeMoved: watch.reasonsWatchMoved.typeMoved,
         receivedBy: watch.reasonsWatchMoved.receivedBy,
         receivedInReturn: watch.reasonsWatchMoved.receivedInReturn,
         value: watch.reasonsWatchMoved.value 
     }).then(watch => {
         res.json({ watch: watch })
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