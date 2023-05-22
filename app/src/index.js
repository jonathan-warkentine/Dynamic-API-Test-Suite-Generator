const tests = require('./utils/requests');
const generateTests = require('./utils/generateTests');

let mochaTestSuite;

// gather all API call requests into a single flattened array
let allTestRequests = [];
tests.forEach(group => {
    allTestRequests.push(group.map(test => test.request));
});

// funnel gathered requests in a single promise
Promise.all(allTestRequests)
    .then( () => {
        mochaTestSuite = generateTests(tests);
    })
    .catch(err => {
        console.error(err);
      });
