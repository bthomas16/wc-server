const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    console.log('we doing it')
    res.send('PqiyfchSqGdDoNO4-QmE4ojUo7aWr-BAmu43rx23Lx8.zVzQHHBtykEEHnmY6itil7g0RYgjhx9E-WRa9LlQnvo');
})

module.exports = router;