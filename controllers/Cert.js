const express = require('express');
const router = express.Router();

router.get('/.well-known/acme-challenge/oMwXvLmeMKNXLBh9YTymFycTZsd7KZ_0EX0_4TQ6yeA', (req, res) => {
    res.send('oMwXvLmeMKNXLBh9YTymFycTZsd7KZ_0EX0_4TQ6yeA.zVzQHHBtykEEHnmY6itil7g0RYgjhx9E-WRa9LlQnvo');
})