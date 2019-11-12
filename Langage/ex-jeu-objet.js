const Random = {
  get: function () {
    return Math.random();
  },
  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },
  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  },
  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
  },
};

const readline = require('readline');

function Jeu(options) {
  options = options || {};
  const min = options.min || 0;
  const max = options.max !== undefined ? options.max : 100;
  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  // Object.defineProperty(this, 'entierAlea', {
  //   value: Random.getIntInclusive(min, max),
  //   writable: false,
  // });
  this.entierAlea = Random.getIntInclusive(min, max);
  this.essais = [];
}

Jeu.prototype.jouer = function () {
  if (this.essais.length) {
    console.log('Vous avez déjà joué : ' + this.essais.join(' - '));
  }
  // console.log(this._rl);

  this._rl.question('Devinez le nombre : ', (answer) => {
    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur il faut saisir un entier');
      return this.jouer();
    }

    this.essais.push(entierSaisi);

    if (entierSaisi < this.entierAlea) {
      console.log('Trop petit');
      return this.jouer();
    } else if (entierSaisi > this.entierAlea) {
      console.log('Trop grand');
      return this.jouer();
    } else {
      console.log('Gagné');
      this._rl.close();
    }
  });
};


const game = new Jeu();
game.jouer();
