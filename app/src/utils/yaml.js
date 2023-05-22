const fs = require('fs');
const yaml = require('js-yaml');

try {
  let fileContents = fs.readFileSync('./path/to/your/file.yaml', 'utf8');
  let data = yaml.load(fileContents);

  console.log(data);
} catch (e) {
  console.error(e);
}