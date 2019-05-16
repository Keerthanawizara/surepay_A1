const mongoose = require('mongoose');

var mongoosePaginate = require('mongoose-paginate');
//get the Schema class
const Schema = mongoose.Schema;

const AssesseeSchema = new Schema({
    property_id: String,
    propertyNumber: String,
    name: String,
    street: String,
    city: String,
    state: String,
    zip: String,
    address: String,
    cellPhone: String,
    emailAddress: String

});
AssesseeSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('assesseeList', AssesseeSchema, 'assesseeList');