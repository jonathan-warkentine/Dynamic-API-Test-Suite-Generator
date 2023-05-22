const allRequests = require('./utils/requests');

Promise.all(allRequests)
    .then(responses => {
        console.log(responses);
    })
    .catch(err => {
        console.error(err);
      });