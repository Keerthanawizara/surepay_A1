const mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

//get the Schema class
const Schema = mongoose.Schema;

const DatesSchema = new Schema({
    property_id: String,
    propertyNumber: String,
    estimatedDate: String,
    actualEstimatedDate: String,
    firstInstallmentDate: String,
    secondInstallmentDate: String,
    estimatedPetitionDate: String,
    petitionFiledDate: String,
    extentionDate: String,
    expirationDate: String,
    assignmentCallDate: String,
    proveUpDate: String,
    orderOfDate: String
});

DatesSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('datesList', DatesSchema, 'datesList');