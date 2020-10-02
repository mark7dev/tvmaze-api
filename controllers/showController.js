const Show = require('../Models/showModel');

exports.createShow = async (req, res) => {

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