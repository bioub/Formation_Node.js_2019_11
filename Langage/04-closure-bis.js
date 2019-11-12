const closureOuModuleOuGlobale = 'closureOuModuleOuGlobale';

function externe() {
  // Portée de closure est sauvegardée dans ce cas
  const closure = 'closure';
  function interne() {
    const locale = 'locale';
    console.log(locale, closure, closureOuModuleOuGlobale);
  }
  return interne;
}
const interne = externe();
interne();

// console.log(typeof interne); // undefined

// pile d'appels
// ^
// |
// |
// |externe - interne
// +---------------------------------> temps


// ????
for (var i=0; i<3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000);
}

function saveI(val) {
  return function() {
    console.log(val);
  };
}
for (var i=0; i<3; i++) {
  setTimeout(saveI(i), 1000);
}
