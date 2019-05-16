const propertySchema = require('./propertySchema');


const propertyDetail = async (req) => {
  let docs = await propertySchema.create(req)
  if (docs) {
    return docs
  } else {
    return err
  }
}

const propertyDataList = async (req) => {
  let docs = await propertySchema.paginate({}, { offset: req.payload.pageNo, limit: req.payload.pageSize = 10 })
  if (docs) {
    return docs;
  } else {
    return err;
  }
}

const propertyRecord = async (req) => {
  let docs = await propertySchema.findOne(req)
  if (docs) {
    return docs;
  } else {
    return err;
  }
}


const propertyRecordUpdate = async (req, params) => {
  let docs = await propertySchema.updateOne(req, { $set: params })
  if (docs) {
    return docs;
  } else {
    // return err;
    console.log(err)
  }
}


const propertyRecordDelete = async (req) => {
  let docs = await propertySchema.deleteOne(req)
  if (docs) {
    return docs;
  } else {
    return err;
  }
}

const propertyDuplicateChecker = async (req) => {
  let docs = await propertySchema.findOne({ propertyNumber: req });
  if (docs) {
    return docs;
  }
}




module.exports = {
  propertyDetail,
  propertyDataList,
  propertyRecord,
  propertyRecordUpdate,
  propertyRecordDelete,
  propertyDuplicateChecker
} 