const path = require('path');

console.log(__filename);
console.log(__dirname);

console.log(path.parse(__filename).ext);

console.log(path.join('logs', 'app.log'));
console.log(path.resolve('logs', 'app.log'));

// Il faut créer des chemin avec path.resolve ou join
console.log(path.resolve(__dirname, 'logs', 'app.log'));

