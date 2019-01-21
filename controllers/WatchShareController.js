const express = require('express');
const router = express.Router();
const knex = require('../config/db.js');
const Watch = require('../models/watch')


router.get('/by-watchid', async (req, res) => {
    let watchId = req.query.watchId
    let watchArr = await Watch.DbGetWatchByIdJoinUser(watchId)
    let watch = watchArr[0]
    res.json({watch})
});

router.get('/collection', (req, res) => {
    let userId = req.params.userId;
    let article = articles.find(x => x.id == articleId);
    res.json({article});
});

module.exports = router;
