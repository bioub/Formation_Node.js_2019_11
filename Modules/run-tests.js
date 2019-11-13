const glob = require('glob');

glob('test/*.test.js', (err, matches) => {
  for (const match of matches) {
    require('./' + match);
  }
})
