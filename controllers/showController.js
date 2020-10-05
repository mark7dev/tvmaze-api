const Show = require('../Models/showModel');
const { validationResult } = require('express-validator');

// Create show
exports.createShow = async (req, res) => {

    // Check if there are errors
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Get name from request
    const { name } = req.body;

    try {
        // Validate if name already exist
        let show = await Show.findOne({ name });

        if(show) {
            return res.status(400).json({ msg:'Show already exist' });
        }

        // Create new show
        show = new Show(req.body);

        // Save new show
        await show.save();

        // Message success
        res.json({ msg: 'Show created successfully!' });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal error');
    }
}

// Get all shows from current user
exports.getShows = async (req, res) => {
    try {
        const shows = await Show.find().sort({ name: 1 });
        res.json({ shows });
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal error');
    }
}

// Update show
exports.updateShow = async (req, res) => {

    // Check if there are errors
    const errors = validationResult(req);
    if( !errors.isEmpty() ) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Get info from show
    const { name, duration, schedule, poster, rating, language } = req.body;
    const showUpdated = {
        name,
        duration,
        schedule,
        poster,
        rating,
        language
    };
    

    try {
        // Find request show id in DB
        let show = await Show.findById(req.params.id);

        // Check if show exist
        if(!show) {
            return res.status(404).json({ msg: 'Show not found'})
        }

        // Update show
        show = await Show.findByIdAndUpdate(
            { _id: req.params.id }, 
            { $set: showUpdated }, 
            { new: true }
        )

        // res.json({ show })
        res.json({ msg: 'Show updated successfully!' });
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal error');
    }
}

// Delete show by id
exports.deleteShow = async(req, res) => {
    try {
        // Find request show id in DB
        let show = await Show.findById(req.params.id);

        // Check if show exist
        if(!show) {
            return res.status(404).json({ msg: 'Show not found'})
        }

        // Delete show
        await Show.findOneAndRemove({ _id: req.params.id });
        res.json({ msg: 'Show removed'})

    } catch (error) {
        console.log(error);
        res.status(500).send('Internal error');
    }
}