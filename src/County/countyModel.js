const countySchema = require('./countySchema');


const countyDetail = async(req) => {
    let docs = await countySchema.create(req)
    if(docs){
      return docs
    }else{
      return err
    }
  } 

  const countyDataList = async(req)=> {
    let docs = await countySchema.findOne(req)
    if(docs) {
      return docs;
   }else {
       return err;
   }
  }


  const countyRecordUpdate = async(params, req) => {
    let docs = await countySchema.updateOne(params,{$set:req},{multi:true})
    if(docs) {
      return docs;
   }else {
       return err;
   }
  }
  module.exports={
      countyDetail,
      countyDataList,
      countyRecordUpdate
  }