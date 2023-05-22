const path = require('path');
const fs = require('fs');
const yaml = require('js-yaml');

const filePath = path.join(__dirname, '../tests.yml');

let data;
try {
  let fileContents = fs.readFileSync(filePath, 'utf8');
  data = yaml.load(fileContents);
} catch (e) {
  console.error(e);
}

module.exports = data;