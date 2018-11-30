const express = require('express');
const router = express.Router();
const knex = require('../config/db.js');

const articles = [
    {
        id: 1,
        title: "Snoopy",
        text: "1st All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        articleImg: "/api/static-assets/blankprofpic.png"
    },
    {
        id: 2,
        title: "loopy",
        text: "2nd All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        articleImg: "/api/static-assets/blankprofpic.png"
    },
    {
        id: 3,
        title: "droples",
        text: "3rd All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
        articleImg: "/api/static-assets/blankprofpic.png"
    },
];

router.get('/', (req, res) => {
    console.log('found me')
    res.json({articles});
});

router.get('/:id', (req, res) => {
    let articleId = req.params.id;
    let article = articles.find(x => x.id == articleId);
    res.json({article});
});

module.exports = router;
