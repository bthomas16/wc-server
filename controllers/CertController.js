const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('we doing it')
    res.send('FH9Ji48jrYkg4B8P5jiGSOPtiXVTa5ACZxckwBMa2pQ.zVzQHHBtykEEHnmY6itil7g0RYgjhx9E-WRa9LlQnvo');
})

module.exports = router;