const readline = require('readline');
const chalk = require('chalk');
const Random = require('./random');

class Jeu {
  constructor(options = {}) {
    const { min = 0, max = 100 } = options;

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
  jouer() {
    if (this.essais.length) {
      console.log(chalk.yellow(`Vous avez déjà joué : ${this.essais.join(' - ')} !!!`));
    }
    // console.log(this._rl);
    this._rl.question(chalk.blue('Devinez le nombre : '), (answer) => {
      const entierSaisi = Number.parseInt(answer);
      if (Number.isNaN(entierSaisi)) {
        console.log(chalk.red('Erreur il faut saisir un entier'));
        return this.jouer();
      }
      this.essais.push(entierSaisi);
      if (entierSaisi < this.entierAlea) {
        console.log(chalk.yellow('Trop petit'));
        return this.jouer();
      } else if (entierSaisi > this.entierAlea) {
        console.log(chalk.yellow('Trop grand'));
        return this.jouer();
      } else {
        console.log(chalk.green('Gagné'));
        this._rl.close();
      }
    });
  }
}

module.exports = Jeu;
