const lienSchema = require('./lienInformationSchema');
const propertySchema = require('../property/propertySchema')


const lienDetail = async (req) => {
  let property = await propertySchema.findOne({ propertyNumber: req.propertyNumber })
  Object.assign(req, { property_id: property._id });
  let docs = await lienSchema.create(req)
  if (docs) {
    return docs
  } else {
    return err
  }
}

const lienDataList = async (req) => {
  let docs = await lienSchema.paginate({}, { offset: req.payload.pageNo, limit: req.payload.pageSize = 10 })
  if (docs) {
    return docs;
  } else {
    return err;
  }
}
const lienRecordUpdate = async (req, params) => {
  let docs = await lienSchema.updateOne(req, { $set: params })
  if (docs) {
    return docs;
  } else {
    return err;
  }
}

module.exports = {
  lienDetail,
  lienDataList,
  lienRecordUpdate
}