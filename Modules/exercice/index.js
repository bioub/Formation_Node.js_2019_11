// dans jeu.js déclarer et exporter la classe jeu/
// puis l'importer ici

// dans random.js exporter vos fonctions random
// puis les importer dans jeu.js
const Jeu = require('./jeu');

const game = new Jeu();
game.jouer();
