const mongoose = require('mongoose');
require('mongoose-type-url');

const ShowSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    duration: {
        type: Number,
        required: true,
    },
    schedule: {
        type: String,
        required: true,
        trim: true
    },
    poster: {
        type: mongoose.SchemaTypes.Url,
        required: true,
        trim: true
    },
    rating: {
        type: Number,
        required: true,
    },
    language: {
        type: String,
        enum: ['English', 'Spanish', 'Portuguese'],
        required: true,
        trim: true
    }
});

module.exports = mongoose.model('Show', ShowSchema);