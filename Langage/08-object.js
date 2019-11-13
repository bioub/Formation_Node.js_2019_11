// L'objet JavaScript pourrait s'appeler dictionnaire
// -> c'est un système clé / valeur

console.log(Math.PI);
console.log(Math.random());

console.log(Math.sum); // undefined

Math.sum = (a, b) => a + b;
console.log(Math.sum(1, 2));
// Mauvaise pratique d'étendre les objets du langage/API Web/Node.js/bibliothèques externe

delete Math.sum;

// d'autres langages on aurait pu parler de :
// PHP : tableau associatif
// Java : Map
// C : struct
// Python : dictionary

// Pour accéder au contenu de l'objet, 2 opérateurs
console.log(Math.PI);
console.log(Math.random());
const key = 'PI';
console.log(Math[key]);
console.log(Math['random']());

// Pour créer des objets, 2 syntaxes
// object literal
// -> pour des objets sans méthodes/fonctions
// -> ou avec des méthodes s'il ne sont créé qu'un fois
const coords1 = {
  x: 1,
  y: 2,
  sumXY: function() { return this.x + this.y; }
};
const coords2 = {
  x: 2,
  y: 3,
  sumXY: function() { return this.x + this.y; }
};

console.log(coords1.sumXY() === coords2.sumXY()); // false (3 !== 5)
console.log(coords1.sumXY === coords2.sumXY); // false (2 fonctions)


const MyMath = {
  sum: (a, b) => a + b,
};

coords1.z = 3;
delete coords1.y;

console.log(coords1.x);

// constructor function
function Coords(x, y, z) {
  this.x = x;
  this.y = y;
  if (z) {
    this.z = z;
  }
}

Coords.prototype.sumXY = function() { return this.x + this.y; }

const coordsA = new Coords(1, 2);
const coordsB = new Coords(2, 3);
console.log(typeof Coords); // function
console.log(typeof coordsA); // object
console.log(coordsA.x); // 1 (dans l'objet)
console.log(coordsA.sumXY()); // undefined (dans l'objet) -> function (dans le prototype)

console.log(coordsA.x !== undefined); // true;
console.log(coordsA.hasOwnProperty('x')); // true;
console.log(coordsA.sumXY !== undefined); // true;
console.log(coordsA.hasOwnProperty('sumXY')); // false;

console.log(coordsA.sumXY === coordsB.sumXY); // true


// Objet Avancé
// On peut empecher l'extension d'un objet
// Object.preventExtensions(coordsB);
