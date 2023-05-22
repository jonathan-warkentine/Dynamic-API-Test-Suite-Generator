const tests = require('./utils/requests');
const generateTests = require('./utils/generateTests');

let mochaTestSuite;

// gather all API call requests into a single promise
Promise.all(tests.map(test => test.request))
    .then( () => {
        mochaTestSuite = generateTests(tests);
    })
    .catch(err => {
        console.error(err);
      });

testSuite.