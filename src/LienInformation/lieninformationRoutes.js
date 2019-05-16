const lienCtrl = require('./lienInformationController')


module.exports = [

  {
    method: 'POST',
    config: {
      tags: ['api', 'lien details'],
      description: 'create lien List for Surepay',
    },
    path: '/lienDetail',
    handler: lienCtrl.lienDetail
  },
  {
    method: 'POST',
    config: {
      tags: ['api', 'lien details'],
      description: 'get lien using single record for Surepay',
    },
    path: '/lienDataList',
    handler: lienCtrl.lienDataList
  },
  {
    method: 'PUT',
    config: {
      tags: ['api', 'lien details'],
      description: 'Update lien List using Id for Surepay',
    },
    path: '/lienRecordUpdate/{id}',
    handler: lienCtrl.lienRecordUpdate
  }
];