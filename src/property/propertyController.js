const propertyCollection = require('./propertyModel');
const mongoose = require('mongoose');
const Joi = require('joi');


//server side Data validation initialize

const schema = Joi.object().keys({
  county: Joi.string(),
  pin: Joi.string(),
  address: Joi.string(),
  city: Joi.string(),
  state: Joi.string(),
  zip: Joi.string(),
  township: Joi.string(),
  classCode: Joi.string(),
  assessedValue: Joi.string(),
  marketValue: Joi.string(),
  taxesPerYear: Joi.string(),
  preeqexm: Joi.string(),
  homeOwner: Joi.string(),
  seniorExemption: Joi.string(),
  seniorFreeze: Joi.string(),
  totalAcres: Joi.string(),
  legalDescription: Joi.string(),
  googleMapView: Joi.string()
})


//create API initialize
const propertyDetail = async (req) => {
  var data = req.payload
  Joi.validate(data, schema, (err) => {
    return err
  })

  data.marketValue = (data.assessedValue * 3);
  const propertyNumber = (data.pin + data.county)
  data.propertyNumber = propertyNumber;
  let propertyFinder = await propertyCollection.propertyDuplicateChecker(propertyNumber)
    .then(docs => docs);

  if (!propertyFinder) {
    let docs = await propertyCollection.propertyDetail(data)
    if (docs) {
      return docs
    } else {
      return err
    }
  }
  else {
    return { statusCode: 400, message: "Property Number Already Exist !" }
  }
}

//property Data List
const propertyDataList = async (req) => {
  let docs = await propertyCollection.propertyDataList(req)
  if (docs) {
    return docs
  } else {
    return { statusCode: 400, message: "Unable to process the request" }
  }
}

//property Update
const propertyRecord = async (req) => {
  const query = req.query;
  const params = { _id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
  let docs = await propertyCollection.propertyRecord(params)
  if (docs) {
    return docs
  } else {
    return { statusCode: 400, message: "Invalid Property Number" }
  }
}

//update property details 
const propertyRecordUpdate = async (req) => {
  const query = req.query;
  const data = req.payload
  const params = { _id: mongoose.Types.ObjectId(req.params.id), propertyNumber: query.propertyNumber };
  let docs = await propertyCollection.propertyRecordUpdate(params, data)
  if (docs) {
    return { statusCode: 200, message: "property updated success" }
  } else {
    return { statusCode: 400, message: "Invaild Property Number " }
  }
}

//delete property details
const propertyRecordDelete = async (req) => {
  const query = req.query;
  const params = { _id: mongoose.Types.ObjectId(req.params.id), pin: query.pin };
  let docs = await propertyCollection.propertyRecordDelete(params)
  if (docs) {
    return { statusCode: 200, message: "property deleted success" }
  } else {
    return { statusCode: 400, message: "Invaild Property Number" }
  }
}

module.exports = {
  propertyDataList,
  propertyDetail,
  propertyRecord,
  propertyRecordUpdate,
  propertyRecordDelete
}