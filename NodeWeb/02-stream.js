
// process.stdout.write('Test');

// process.stdin.once('data', (data) => {
//   console.log('Data : ' + data.toString());
//   process.stdin.end();
// })

// Readable Stream, ex : process.stdin
// Writeable Stream, ex: process.stdout
// Duplex Stream : readable + writeable (socket)
// Transform : Duplex + modification entre le read et le write

const fs = require('fs');
const zlib = require('zlib');
const readline = require('readline');

const rs = fs.createReadStream('.editorconfig');
const ws = fs.createWriteStream('.editorconfig.zip');
const zip = zlib.createGzip();

// cat .editorconfig | zip > .editorconfig.copy
rs.pipe(zip).pipe(ws);

const rl = readline.createInterface(rs)
let i = 0;
rl.on('line', (line) => {
  console.log(++i + ' ' + line);
});
