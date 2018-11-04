const express = require('express');
const router = express.Router();
const knex = require('../config/db');
const Promise = require('promise');
const WatchModel = require('../models/watch.js');

const VerifyToken = require('../middleware/VerifyToken.js');

router.get('/', VerifyToken, (req, res) => {
    knex.select('*')
    .from('user_watch_favorited')
    .where('user_watch_favorited.isCurrentFavorite', true)
    .andWhere('user_watch_favorited.user_id', req.id)
    .fullOuterJoin('watch', 'user_watch_favorited.watch_id', 'watch.id')
    .then(favorites => {
        res.status(200).json({favorites});
    }).catch(err => {
        console.log(err)
        res.status(404).json({ favorites: []})
    })
})

router.get('/heart-icons', VerifyToken, (req, res) => {
    knex('user_watch_favorited').where('user_id', req.id).then(favorites => {
        res.status(200).json({favorites});
    }).catch(err => {
        console.log(err)
        res.status(404).json({ favorites: []})
    })
})

router.post('/', VerifyToken, async (req, res) => {
    let watchId = +req.query.watchId; // watch to favorite id
    let userId = req.id;  // user adding watch to favorites
    let isFavoriteRowExist = await getFavoriteRowExist(userId, watchId) // has this watch been favorited before?
        let favoriteWatch = isFavoriteRowExist;
        if(favoriteWatch) toggleWatchfavorite(favoriteWatch, res, userId) // if so, toggle it
        else createNewFavorite(userId, watchId, res)
})



//MODEL Methods

function toggleWatchfavorite(favoriteWatch, res, userId) {
    knex('user_watch_favorited').where('id', favoriteWatch.id).returning('*').update({
        isCurrentFavorite: !favoriteWatch.isCurrentFavorite
    }).then( async (favorites) => {
        console.log('toggled', favorites)
        await getFavoriteWatches(userId, res);
    }).catch(err => {
        res.status(500).send(err)
    })
}

function getFavoriteWatches(userId, res) {
    knex('user_watch_favorited').where('user_id', userId).andWhere('isCurrentFavorite', true).then(favorites => {
        res.status(200).json({favorites})
    }).catch(err => { 
        res.status(404).res.json({favorites: []})
    })
}

function getFavoriteRowExist(userId, watchId) {
    return knex('user_watch_favorited').where('user_id', userId).andWhere('watch_id', watchId).first()
    .then(watch => {
        console.log('check this favorite status',  watch)
        return watch;
    }).catch(() => {
        return false
    })
}

function createNewFavorite(userId, watchId, res) {
    knex('user_watch_favorited')
    .returning('id')
    .insert({
        user_id: userId,
        watch_id: watchId,
        isCurrentFavorite: true
    }).then(id => {
        getFavoriteWatches(userId, res)
    }).catch(() =>{
        res.status(500).send();
    })
}

module.exports = router;