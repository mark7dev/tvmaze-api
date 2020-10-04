const Show = require('../Models/showModel');
const { validationResult } = require('express-validator');

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
        res.status(400).send('There is an error!');
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