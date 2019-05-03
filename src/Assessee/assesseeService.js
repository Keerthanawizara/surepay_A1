const axios = require('axios')
axios.defaults.baseURL = 'http://139.59.36.120';


axios({
  method: 'get',
  url: 'http://139.59.36.120/assesseeDataList',
})
.then (res=>res)
.catch(err=>err)

axios({
  method: 'post',
  url: 'http://139.59.36.120/assesseeDetail',
  data: {
    name :"sameera",
    emailId:"sameera@mail.com" ,
    phone:"897654321",
    propertyId:"789665321"  
  }
})
.then((response)=> {
  console.log(response.data);
  
})
.catch((error)=> {
  console.log(error);
})

axios({
  method: 'get',
  url: 'http://139.59.36.120/assesseeRecord/5ccaca007cb86066d1ee69d4',
})
.then((response)=> {
  console.log(response);
  
})
.catch((error)=> {
  console.log(error);
})

// //update Api
  let content ={
      name:'priya'
  }
  axios({
    method: 'put',
    url: ('http://139.59.36.120/assesseeRecordUpdate/5ccaca697cb86066d1ee69d5',content.name)
  })
      .then((response)=> {
        console.log(response);
        
      })
      .catch((error)=> {
        console.log(error);
      })

axios({
  method: 'delete',
  url: 'http://139.59.36.120/assesseeRecordDelete/5ccaca007cb86066d1ee69d4',
})
  .then((response)=> {
    console.log(response);
    
  })
  .catch((error)=> {
    console.log(error);
  });

  