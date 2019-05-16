const datesSchema = require('./datesSchema');
const propertySchema = require('../property/propertySchema')

const DatesDetail = async (req) => {
  let property = await propertySchema.findOne({ propertyNumber: req.propertyNumber })
  Object.assign(req, { property_id: property._id });
  let docs = await datesSchema.create(req)
  if (docs) {
    return docs
  } else {
    return err
  }
}

const DatesDataList = async (req) => {
  let docs = await datesSchema.paginate({}, { offset: req.payload.pageNo, limit: req.payload.pageSize = 10 })
  if (docs) {
    return docs;
  } else {
    return err;
  }
}

const DatesRecordUpdate = async (req, params) => {
  let docs = await datesSchema.updateOne(req, { $set: params })
  if (docs) {
    return docs;
  } else {
    return err;
  }
}


module.exports = {
  DatesDetail,
  DatesDataList,
  DatesRecordUpdate
}