const lienCollection = require('./lienInformationModel');
const mongoose = require('mongoose');
const Joi = require('joi');

// server side Data validation initialize

const schema = Joi.object().keys({
    propertyNumber: Joi.string(),
    creditor: Joi.string(),
    amount: Joi.string(),
    paymentAmount: Joi.string()
})


const lienDetail = async (req) => {
    var data = req.payload
    Joi.validate(data, schema, (err) => {
        return err
    })
    let docs = await lienCollection.lienDetail(data)
    if (docs) {
        return docs
    } else {
        return { statusCode: 400, message: "Unable to Create Lien Information" }
    }
}

const lienDataList = async (req) => {
    let docs = await lienCollection.lienDataList(req)
    if (docs) {
        return docs
    } else {
        return { statusCode: 400, message: "Unable to Process Request !" }

    }
}

const lienRecordUpdate = async (req) => {
    const query = req.query;
    const data = req.payload
    const params = { _id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
    let docs = await lienCollection.lienRecordUpdate(params, data)
    if (docs) {
        return { statusCode: 200, message: "lien Record updated successfully" }
    } else {
        return { statusCode: 400, message: "Lien Information Update Unsuccessful !" }

    }
}
module.exports = {
    lienDetail,
    lienDataList,
    lienRecordUpdate
}