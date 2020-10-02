const express = require('express');
const router = express.Router();
const showController = require('../controllers/showController.js');
const { check } = require('express-validator');

// Create show
// api/shows
router.post('/',
// Custom validations
    [
        check('name', 'Name is required').not().isEmpty(),
        check('duration', 'Duration is required').not().isEmpty(),
        check('duration', 'Duration must be an integer').isInt({ min: 1, max: 60 }),
        // check('duration')
        //     .not().isEmpty().withMessage('Duration is required')
        //     .isInt().withMessage('Duration must be an integer'),
        check('schedule', 'Schedule is required').not().isEmpty(),
        check('poster', 'Poster is required').not().isEmpty(),
        check('rating', 'Rating is required').not().isEmpty(),
        check('rating', 'Rating must be float').isFloat(),
        check('language', 'Language is required').not().isEmpty(),
        check('language', 'Language must be English, Spanish or Portuguese').isIn(['English', 'Spanish', 'Portuguese'])
    ], 
    showController.createShow
);

module.exports = router;