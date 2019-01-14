const express = require('express');
const router = express.Router();
const knex = require('../config/db.js');
const Promise = require('promise');
const SortFilter = require('../models/sortFilter.js');

const VerifyToken = require('../middleware/VerifyToken.js');

router.get('/condition/', VerifyToken, async (req, res) => {
    try 
    {
        let id = req.id;        
        let conditionToFilterBy = +req.query.option;
        let collection = await SortFilter.getWatchCollectionByCondition(id, conditionToFilterBy);
        res.status(200).json({collection})
    }
    catch (err)
    {
        console.log(err)
        res.status(500).json({err})
    }  
})

router.get('/status/', VerifyToken, async (req, res) => {
    try 
    {
        let id = req.id;        
        let statusToFilterBy = req.query.option;
        let collection = await SortFilter.getWatchCollectionByStatus(id, statusToFilterBy)
        res.status(200).json({collection})
    }
    catch (err)
    {
        console.log(err)
        res.status(500).json({err})
    } 
})

router.get('/style/', VerifyToken, async (req, res) => {
    try 
    {
        let id = req.id;        
        let styleToFilterBy = await req.query.option;
        let collection = await SortFilter.getWatchCollectionByStyle(id, styleToFilterBy);
        res.status(200).json({collection})
    }
    catch (err)
    {
        console.log(err)
        res.status(500).json({err})
    } 
})

router.get('/search/', VerifyToken, async (req, res) => {
    try 
    {
        let id = req.id;        
        let searchTerm = req.query.searchTerm;
        let collection = await SortFilter.getWatchCollectionBySearchTerm(id, searchTerm);
        res.status(200).json({collection})
    }
    catch (err)
    {
        console.log(err)
        res.status(500).json({err})
    } 
})

router.get('/favorites/', VerifyToken, async (req, res) => {
    try 
    {
        let userId = req.id;
        let option = req.query.option;
        let collection = await SortFilter.getWatchFavorites(userId, option);
        res.status(200).json({collection})
    }
    catch (err)
    {
        console.log(err)
        res.status(500).json({err})
    } 
})

router.get('/previous/', VerifyToken, async (req, res) => {
    try 
    {
        let userId = req.id;
        let option = req.query.option;
        let collection = await SortFilter.GetPreviousWatches(userId, option);
        res.status(200).json({collection})
    }
    catch (err)
    {
        console.log(err)
        res.status(500).json({err})
    } 
})


 module.exports = router;