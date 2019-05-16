const assesseeCollection = require('./assesseeModel');
const mongoose = require('mongoose');
const Joi = require('joi');


//server side data validation

const schema = Joi.object().keys({
    name: Joi.string().min(3).max(30).required(),
    street: Joi.string(),
    city: Joi.string(),
    state: Joi.string(),
    zip: Joi.string(),
    address: Joi.string(),
    cellPhone: Joi.string(),
    emailAddress: Joi.string().email({ minDomainAtoms: 3 }).required()
})

//create assessee api 
const assesseeDetail = async (req) => {
    var data = req.payload;
    data.address = data.street + "," + data.city + "," + data.state
    Joi.validate(data, schema, (err) => {
        return err
    })
    let docs = await assesseeCollection.assesseeDetail(data)
    if (docs) {
        return docs
    } else {
        return { statusCode: 400, message: "Unable to Create Assessee" }
    }
}



//  //assessee Data list Api

const assesseeDataList = async (req) => {
    let docs = await assesseeCollection.assesseeDataList(req)
    if (docs) {
        return docs
    } else {
        return { statusCode: 400, message: "Unable to process the request" }

    }
}

const assesseeRecord = async (req) => {
    const params = { _id: mongoose.Types.ObjectId(req.params.id) };
    let docs = await assesseeCollection.assesseeRecord(params)
    if (docs) {
        return docs
    } else {
        return { statusCode: 400, message: "Asseessee Not found !" }
    }
}


// //assessee record update api using id

const assesseeRecordUpdate = async (req) => {
    var data = req.payload
    const params = { _id: mongoose.Types.ObjectId(req.params.id) };
    let docs = await assesseeCollection.assesseeRecordUpdate(params, data)
    if (docs) {
        return { statusCode: 200, message: "Assessee record updated success" }
    } else {
        return { statusCode: 400, message: "Asseessee Update Unsuccessful !" }
    }
}
// // // delete assessee details api using id

const assesseeRecordDelete = async (req) => {
    const params = { _id: mongoose.Types.ObjectId(req.params.id) };
    let docs = await assesseeCollection.assesseeRecordDelete(params)
    if (docs) {
        return { statusCode: 200, message: "assessee record deleted success" }
    } else {
        return { statusCode: 400, message: "Asseessee Not found !" }
    }
}





module.exports = {
    assesseeDetail,
    assesseeDataList,
    assesseeRecord,
    assesseeRecordUpdate,
    assesseeRecordDelete
}