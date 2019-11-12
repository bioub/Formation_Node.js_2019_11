const prenoms = ['Jean', 'Romain', 'Eric'];

// Afficher en majuscule les prénoms de 4 lettres

// Paradigme Impératif
for (let i = 0; i < prenoms.length; i++) {
  const prenom = prenoms[i];
  if (prenom.length === 4) {
    const prenomUpper = prenom.toUpperCase();
    console.log(prenomUpper);
  }
}

// Paradigme fonctionnel (ES5+)
prenoms.filter((prenom) => prenom.length === 4) // ['Jean', 'Eric']
       .map((prenom) => prenom.toUpperCase()) // ['JEAN', 'ERIC']
       .forEach((prenomUpper) => console.log(prenomUpper));

console.log('FIN');

// pile d'appels
// ^
// |                         lg   lg
// |=> - => - =>   => - =>   => - =>
// |filter       - map     - forEach - lg
// +--------------------------------------> temps
//                           JEAN ERIC FIN
