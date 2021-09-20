const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String,
    date: {
        type: String,
        default: new Date().toISOString()
    }
});

module.exports = mongoose.model('Url', URLSchema);