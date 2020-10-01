const Show = require('../Models/showModel');

exports.createShow = async (req, res) => {
    try {
        let show;

        // Create new show
        show = new Show(req.body);

        // Save new show
        await show.save();

        // Message success
        res.send('Show created!');
    } catch (error) {
        console.log(error);
        res.status(400).send('There is an error!');
    }
}