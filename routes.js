const offerController = require('./api/offer');
const customer = require('./api/customer');
const routes = [
  {
    method: 'GET',
    url: '/api/offers',
    handler: offerController.getofferList
  },
  {
    method: 'GET',
    url: '/api/customers',
    handler: customer.getcustomerList
  },
]
module.exports = routes
