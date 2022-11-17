const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb+srv://ugabrucer30:Misha398?@cluster0.lfunwdz.mongodb.net/?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        newUnifiedTopology: true,
    },
);

module.exports = mongoose.connection;