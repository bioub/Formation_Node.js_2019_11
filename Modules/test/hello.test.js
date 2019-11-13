const hello = require('../src/hello'); // fichier du projet (toujours ./ ou ../)
const assert = require('assert'); // fichier du binaire/node.exe
const chalk = require('chalk');

try {
  assert.equal(hello('Romain'), 'Hello ROMAIN !');
  console.log(chalk.green('Test hello Passed'));
} catch (error) {
  console.log(chalk.red('Test hello Failed'));
  console.log(error);
}
