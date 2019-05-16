const assesseeSchema = require('./assesseeSchema');
const propertySchema = require('../property/propertySchema');

const assesseeDetail = async (req) => {
  let property = await propertySchema.findOne({ propertyNumber: req.propertyNumber });
  Object.assign(req, { property_id: property._id });
  let docs = await assesseeSchema.create(req)
  if (docs) {
    return docs
  } else {
    return err
  }
}

const assesseeDataList = async () => {
  let docs = await assesseeSchema.paginate({}, { offset: req.payload.pageNo, limit: req.payload.pageSize = 10 })
  if (docs) {
    return docs;
  } else {
    return err;
  }
}

const assesseeRecord = async (req) => {
  let docs = await assesseeSchema.findOne(req)
  if (docs) {
    return docs;
  } else {
    return err;
  }
}

const assesseeRecordUpdate = async (params, req) => {
  let docs = await assesseeSchema.updateOne(params, { $set: req }, { multi: true })
  if (docs) {
    return docs;
  } else {
    return err;
  }
}

const assesseeRecordDelete = async (req) => {
  let docs = await assesseeSchema.deleteOne(req)
  if (docs) {
    return docs;
  } else {
    return err;
  }
}

module.exports = {
  assesseeDetail,
  assesseeDataList,
  assesseeRecord,
  assesseeRecordUpdate,
  assesseeRecordDelete
}