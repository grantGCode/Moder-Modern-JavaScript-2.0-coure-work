const mongoose = require('mongoose');

const IdeaSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a text field']
    },
    tag: {
        type: String
    },
    username: {
        type: String
    },
    data: {
        type: Date,
        default: Date.now
    }
});


module.exports = mongoose.model('Idea', IdeaSchema);