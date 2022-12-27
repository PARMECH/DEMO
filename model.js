'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var HappyHrsSchema = new Schema({
    FoodCategory: {
        type: [Object],
    },
    DaySale: {
        type: [Object], default : null
    },
    DateSale: {
        type: [Object], default : null
    },
    Discount : {
       type: [Object],
    }
});


module.exports = mongoose.model('favouriteCoins', HappyHrsSchema);
