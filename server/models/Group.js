const mongoose = require('mongoose')
const Schema = require('../db/index')

const GroupSchema = new Schema({
    userName: String,
    group1: String,
    group2: String,
    group3: String,
    group4: String,
    group5: String,
    group6: String,
    group7: String,
    group8: String,
    group9: String,
    group10: String,
    group11: String,
    group12: String,
    group13: String,
    group14: String,
    group15: String,
},{collection:'group'})

const Group = mongoose.model('Group', GroupSchema);

module.exports = Group