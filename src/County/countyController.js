const countyCollection = require('./countyModel');
const mongoose = require('mongoose');
const Joi = require('joi');

//server side data validation

const schema = Joi.object().keys({
    propertyNumber: Joi.string(),
    County:Joi.string(),
    Name: Joi.string(),
    Position:Joi.string(),
    Address: Joi.string(),
    PhoneNumber:Joi.string(),
    EmailAddress:Joi.string(),
    Website : Joi.string(),

})

//create county api 

const countyDetail = async(req,h) => {
    var data = req.payload
    Joi.validate(data, schema,(err)=>{
        return err
     })
    let docs = await countyCollection.countyDetail(data)
   if(docs){
       return docs
   }else{
       return err
   }   
}
// countyDataList api table List Page


const countyDataList = async(req,h) => {
const data = req.payload;
  let docs = await countyCollection.countyDataList(data)
   if(docs){
      return docs
  }else{                                                                                                                                                    
      return err    
  } 
}      


//countyRecordupdate api using pin 

const countyRecordUpdate = async(req,h) => {
    var data = req.payload
    const params = {_id: mongoose.Types.ObjectId(req.params.id)};
        let docs = await countyCollection.countyRecordUpdate(params, data)
        console.log(docs)
        if(docs){
           return docs
       }else{
           return err
       }   
    }     

 


 
module.exports = {
    countyDetail,
    countyDataList,
    countyRecordUpdate,
    



}
