const Emailctrl = require('./emailController')

module.exports = [
{
    method: 'POST',
    config: {
        tags: ['api','Email details'],
        description: 'Email List for Surepay',
    },
     path: '/sendEmail', 
     handler: Emailctrl
 }
];