const DatesCtrl = require('./datesController')


module.exports = [

  {
    method: 'POST',
    config: {
      tags: ['api', 'Important Dates'],
      description: 'create dates List for Surepay',
    },
    path: '/importantDates',
    handler: DatesCtrl.DatesDetail
  },
  {
    method: 'POST',
    config: {
      tags: ['api', 'Important Dates'],
      description: 'get dates using single record for Surepay',
    },
    path: '/importantDatesList',
    handler: DatesCtrl.DatesDataList
  },
  {
    method: 'PUT',
    config: {
      tags: ['api', 'Important Dates'],
      description: 'Update dates List using Id for Surepay',
    },
    path: '/importantDatesUpdate/{id}',
    handler: DatesCtrl.DatesRecordUpdate
  }
];