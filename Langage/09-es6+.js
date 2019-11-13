// REST Params : conversion entre une liste de valeur -> tableau
// ici : 3, 4, 5 -> [3, 4, 5]
function sum(a, b, ...others) {
  let result = a + b;

  for (const nb of others) {
    result += nb;
  }

  return result;
}

console.log(sum(1, 2, 3, 4, 5)); // 15

// SPREAD Operator : conversion entre un tableau -> liste de valeur
// ici : [3, 4, 5] -> 3, 4, 5

function multiply(a, b, c) {
  return a * b * c;
}

const nbs = [3, 4, 5];
console.log(multiply(...nbs)); // 60

// SPREAD Operator peut être utilisé pour cloner un tableau
const clone = [...nbs];
const cloneEtAjouter = [2, ...nbs, 6];
const concat = [...nbs, ...clone];

// Destructurer un tableau
// récupérer son contenu
// const trois = nbs[0];
// const quatre = nbs[1];
// const cinq = nbs[2];
// const six = nbs[3] !== undefined ? nbs[3] : 6;

//    [3    , 4     , 5   , undefined]
const [trois, quatre, cinq, six = 6] = nbs;
//    [3    , 4, 5     ]
const [three, ...others] = nbs;

// Destructurer un objet
const coords = {x: 1, y: 2};
//    {x: 1 , y: 2   }
const {x: un, y: deux} = coords;

// Combiné avec shortand property et default value
const {x, y, z = 0} = coords;
