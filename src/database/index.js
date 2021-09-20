const mongoose = require('mongoose');

const DB_URL = 'mongodb://localhost:27017/shorturl';

mongoose.connect(DB_URL, { 
    useNewUrlParser: true , 
    useUnifiedTopology: true 
});

const connection = mongoose.connection;

module.exports = connection;