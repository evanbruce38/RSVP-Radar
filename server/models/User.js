const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const hotelSchema = require('./Hotel');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'Must use a valid email address']
    },
    password: {
        type: String,
        required: true
    },
    savedHotels: [hotelSchema]
  },
  {
    toJSON: {
        virtuals: true
    }
  }
);

userSchema:methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};

userSchema.virtual('hotelCount').get(function () {
    return this.savedHotels.length;
});

const User = model('User', userSchema);

module.exports = User;