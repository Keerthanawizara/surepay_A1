const axios = require('axios')
axios.defaults.baseURL = 'http://139.59.36.120';
axios.get('http://139.59.36.120/assesseeDataList')
  .then((response)=> {
    console.log(response);
    
  })
  .catch((error)=> {
    console.log(error);
  });

  axios.post('http://139.59.36.120/assesseeDetail',  {
    name :"keerthirajj",
    emailId:"keerthirajm@mail.com" ,
    phone:"97869521699",
    propertyId:"12345697"

  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });


  axios.get('http://139.59.36.120/assesseeRecord/',{
  params : {
    _id: "5ccaca007cb86066d1ee69d4"
  }
  })
  .then((response)=> {
    console.log(response);
    
  })
  .catch((error)=> {
    console.log(error);
  });

//update Api
  let content ={
      name:'priya'
  }
  axios.put ('http://139.59.36.120/assesseeRecordUpdate',content,{
    params : {
        ID: "5ccaca697cb86066d1ee69d5"
      }
    })
      .then((response)=> {
        console.log(response);
        
      })
      .catch((error)=> {
        console.log(error);
      })

  axios.delete('http://139.59.36.120/assesseeRecordDelete',{
  params : {
    ID: "5ccaca007cb86066d1ee69d4"
  }
  })
  .then((response)=> {
    console.log(response);
    
  })
  .catch((error)=> {
    console.log(error);
  });

  