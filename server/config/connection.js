const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://mike-class:mikeClassPasswordNumberTw0@dronefigs.5jnlz.mongodb.net/');

module.exports = mongoose.connection;
