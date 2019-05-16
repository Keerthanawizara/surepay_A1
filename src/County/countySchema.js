const mongoose = require('mongoose');

//get the Schema class
const Schema = mongoose.Schema;

const CountySchema = new Schema({
    propertyNumber: String,
    County  : String,
    Name : String,
    Position : String,
    Address : String,
    PhoneNumber: String,
    EmailAddress: String,
    Website : String
});

module.exports = mongoose.model('countyList', CountySchema, 'countyList');