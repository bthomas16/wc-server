const express = require('express');
const router = express.Router();
const knex = require('../config/db.js');
const Promise = require('promise');

const watchInfos = [
    {
        id: 1,
        brand: "Ocean Crawler",
        text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        siteLink: "https://www.oceancrawler.com/",
        logoSrc: 'https://cdn.shopify.com/s/files/1/1626/5247/t/5/assets/logo.png?4217114133936338996'
    },
    {
        id: 2,
        brand: "Aragon",
        text: "On the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        siteLink: "https://www.aragonwatch.com/",
        logoSrc: 'https://i.ytimg.com/vi/g6O2W1sHQVk/hqdefault.jpg'
    },
    {
        id: 3,
        brand: "Omega",
        text: "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true.",
        siteLink: "https://www.omegawatch.com/",
        logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Omega_Logo.svg/200px-Omega_Logo.svg.png'
    }
];

router.get('/', (req, res) => {
    let watchInfoId = req.query.watchInfoId;
    let watchInfo = watchInfos.find(x => x.id == watchInfoId);
    console.log('here... ', watchInfo);
    res.json({watchInfo});
});

module.exports = router;
