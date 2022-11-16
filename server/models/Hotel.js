const { createPromptModule } = require('inquirer');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const hotelSchema = new Schema({ 
    hotelId: {
        type: String,
        required: true,
    },
    hotelName: {
        type: String,
        required: true,
    },
    hotelBrand: {
        type: String,
        required: true,
    },
    cityName: {
        type: String,
        required: true,
    },
    thumbnailUrl: {
        type: String,
        required: true,
    },
    starRating: {
        type: String,
        required: true,
    },
});

module.exports = hotelSchema;