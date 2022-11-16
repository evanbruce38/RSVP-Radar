const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/travel',
    {
        useNewUrlParser: true,
        newUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
);

module.exports = mongoose.connection;