const mongoose = require('mongoose')
const Schema = require('../db/index')

const userInfo = new Schema({
    userId: Number,
    userName: String,
    password: String,
    qqID: String,
    card1: {
        cardName: String,
        cardCE: Number,
        job: String,
        hasAB: String
    },
    card2: {
        cardName: String,
        cardCE: Number,
        job: String,
        hasAB: String
    },
    card3: {
        cardName: String,
        cardCE: Number,
        job: String,
        hasAB: String
    },
    card4: {
        cardName: String,
        cardCE: Number,
        job: String,
        hasAB: String
    },
    card5: {
        cardName: String,
        cardCE: Number,
        job: String,
        hasAB: String
    },
    card6: {
        cardName: String,
        cardCE: Number,
        job: String,
        hasAB: String
    },
    card7: {
        cardName: String,
        cardCE: Number,
        job: String,
        hasAB: String
    },
    card8: {
        cardName: String,
        cardCE: Number,
        job: String,
        hasAB: String
    },
    card9: {
        cardName: String,
        cardCE: Number,
        job: String,
        hasAB: String
    },
    card10: {
        cardName: String,
        cardCE: Number,
        job: String,
        hasAB: String
    },
    card11: {
        cardName: String,
        cardCE: Number,
        job: String,
        hasAB: String
    },
    card12: {
        cardName: String,
        cardCE: Number,
        job: String,
        hasAB: String
    },
    card13: {
        cardName: String,
        cardCE: Number,
        job: String,
        hasAB: String
    },
    card14: {
        cardName: String,
        cardCE: Number,
        job: String,
        hasAB: String
    },
    card15: {
        cardName: String,
        cardCE: Number,
        job: String,
        hasAB: String
    }
},{collection:'userA'})
module.exports = mongoose.model('User', userInfo)