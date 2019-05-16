const datesCollection = require('./datesModel');
const mongoose = require('mongoose');
const Joi = require('joi');

const schema = Joi.object().keys({
    propertyNumber: Joi.string(),
    estimatedDate: Joi.string(),
    actualEstimatedDate: Joi.string(),
    firstInstallmentDate: Joi.string(),
    secondInstallmentDate: Joi.string(),
    estimatedPetitionDate: Joi.string(),
    petitionFiledDate: Joi.string(),
    extentionDate: Joi.string(),
    expirationDate: Joi.string(),
    assignmentCallDate: Joi.string(),
    proveUpDate: Joi.string(),
    orderOfDate: Joi.string()
})

const DatesDetail = async (req) => {
    var data = req.payload
    Joi.validate(data, schema, (err) => {
        return err
    });

    let purchaseDate = "2019-01-01"
    data.estimatedDate = new Date(purchaseDate);
    data.estimatedDate.setDate(data.estimatedDate.getDate() + 135)
    data.estimatedDate = (data.estimatedDate.getFullYear() + "-" + data.estimatedDate.getMonth() + "-" + data.estimatedDate.getDate())

    data.estimatedPetitionDate = new Date(purchaseDate);
    data.estimatedPetitionDate.setMonth(data.estimatedPetitionDate.getMonth() + 24)
    data.estimatedPetitionDate = (data.estimatedPetitionDate.getFullYear() + "-" + data.estimatedPetitionDate.getMonth() + "-" + data.estimatedPetitionDate.getDate())


    let docs = await datesCollection.DatesDetail(data)
    if (docs) {
        return docs
    } else {
        return { statusCode: 400, message: "Unable to Create Assessee" }
    }
}

const DatesDataList = async (req) => {
    let docs = await datesCollection.DataList(req)
    if (docs) {
        return docs
    } else {
        return { statusCode: 400, message: "Unable to Process the Request !" }
    }
}
const DatesRecordUpdate = async (req) => {
    const query = req.query;
    const data = req.payload
    const params = { _id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
    let docs = await datesCollection.DatesRecordUpdate(params, data)
    if (docs) {
        return { statusCode: 200, message: "Dated updated sucessfully" }
    } else {
        return { statusCode: 400, message: "Important Dates Update Unsuccessful !" }

    }
}


module.exports = {
    DatesDetail,
    DatesDataList,
    DatesRecordUpdate

}