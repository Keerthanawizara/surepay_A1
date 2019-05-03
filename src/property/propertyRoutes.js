const propertyCtrl = require('./propertyController')

module.exports = [
    {method: 'GET',
    config: {
        tags: ['api','property details'],
        description: 'get Property details for Surepay',
        auth: false
    },
    path: '/propertyDataList',
    handler: propertyCtrl.propertyDataList
   },
   {
    method: 'POST',
    config: {
        tags: ['api','property details'],
        description: 'create Property details for Surepay',
        auth: false
    },
     path: '/propertyDetail',
     handler: propertyCtrl.propertyDetail
    },
    {
     method: 'GET', 
     config: {
        tags: ['api','property details'],
        description: 'get single Property using Id & pin for Surepay',
        auth: false
    },
     path: '/propertyRecord/{id}', 
     handler: propertyCtrl.propertyRecord
    },
    {
     method: 'PUT',
     config: {
        tags: ['api','property details'],
        description: 'Update Property details using Id & pin for Surepay',
        auth: false
    },
     path: '/propertyRecordUpdate/{id}', 
     handler: propertyCtrl. propertyRecordUpdate
    },
    {
     method: 'DELETE', 
     config: {
        tags: ['api','property details'],
        description: 'Delete Property details using Id & pin for Surepay',
        auth: false
    },
     path: '/propertyRecordDelete/{id}',
     handler: propertyCtrl. propertyRecordDelete}

];
