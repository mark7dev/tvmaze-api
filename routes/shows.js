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
        check('duration', 'Duration must be an integer').isInt(),
        check('schedule', 'Schedule is required').not().isEmpty(),
        check('poster', 'Poster is required').not().isEmpty(),
        check('rating', 'Rating is required').not().isEmpty(),
        check('rating', 'Rating must be float').isFloat(),
        check('language', 'Language is required').not().isEmpty(),
        check('language', 'Language must be English, Spanish or Portuguese').isIn(['English', 'Spanish', 'Portuguese'])
    ], 
    showController.createShow
);

router.get('/',
    showController.getShows
);

// Update show by id
router.put('/:id',
    [
        check('name', 'Name is required').not().isEmpty(),
        check('duration', 'Duration is required').not().isEmpty(),
        check('duration', 'Duration must be an integer').isInt(),
        check('schedule', 'Schedule is required').not().isEmpty(),
        check('poster', 'Poster is required').not().isEmpty(),
        check('rating', 'Rating is required').not().isEmpty(),
        check('rating', 'Rating must be float').isFloat(),
        check('language', 'Language is required').not().isEmpty(),
        check('language', 'Language must be English, Spanish or Portuguese').isIn(['English', 'Spanish', 'Portuguese'])
    ], 
    showController.updateShow
)

// Delete show by id
router.delete('/:id',
    showController.deleteShow
)

module.exports = router;