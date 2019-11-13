const fs = require('fs');
const path = require('path');
// voir aussi fs-extra: fs + des fonctions plus haut niveau

const editorconfigPath = path.resolve(__dirname, '.editorconfig');
const editorconfigCopyPath = path.resolve(__dirname, '.editorconfig.copy');
// Version synchrone
// const buffer = fs.readFileSync(editorconfigPath);
// console.log(buffer.toString('utf-8'));
try {
  const content = fs.readFileSync(editorconfigPath, { encoding: 'utf-8' });
  fs.writeFileSync(editorconfigCopyPath, content);
  console.log('Copy sync done');
} catch (err) {
  console.log(err.message);
}

// ^
// |
// |readFileSync xxxxxxxxxxxxxxxxx writeFileSync xxxxxxxxxxxxxxxxx log
// +-------------------------------20ms----------------------------50ms---->

// Version asynchrone
// Callback Hell / Pyramid of Doom
fs.readFile(editorconfigPath, { encoding: 'utf-8' }, (err, content) => {
  if (err) {
    console.log(err.message);
  } else {
    fs.writeFile(editorconfigCopyPath, content, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log('Copy async done');
      }
    });
  }
});

// ^
// |                               writeFile               log
// |readFile ...                   =>        ...           =>
// +-------------------------------20ms--------------------50ms------>

// Des bibliothèques async ou bluebird ont été créé pour simplifier ce pb

// En natif dans ES6 a été ajouté la classe Promise
// Depuis Node 12, on peut manipuler les fichiers avec Promise directement
// Avant on pouvait utiliser fs-extra

fs.promises.readFile(editorconfigPath, { encoding: 'utf-8' })
  .then((content) => fs.promises.writeFile(editorconfigCopyPath, content))
  .then(() => console.log('Copy promise async done'))
  .catch((err) => console.log(err.message))

// Ecrire 2 lignes dans le fichiers logs/app.log
// avec appendFile

// fs.promises.access('logs')
//   .catch((err) => {
//     if (err.code === 'ENOENT') {
//       return fs.promises.mkdir('logs');
//     }
//     throw err;
//   })
//   .then(() => fs.promises.appendFile('logs/app.log', 'Ligne 1'))
//   .then(() => fs.promises.appendFile('logs/app.log', 'Ligne 2'))
//   .then(() => console.log('Log done'))
//   .catch((err) => console.log(err.message));

// ES2017 / ES8 async/await
// en attendant top level await (Stage 3)
async function copy() {
  try {
    const content = await fs.promises.readFile(editorconfigPath, { encoding: 'utf-8' });
    await fs.promises.writeFile(editorconfigCopyPath, content);
    console.log('Copy async await done');
  } catch (err) {
    console.log(err.message);
  }
}
copy();
