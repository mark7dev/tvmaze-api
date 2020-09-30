const express = require('express');
const router = express.Router();
const showController = require('../controllers/showController.js');


// Create show
// api/shows
router.post('/', 
    showController.createShow
);

module.exports = router;