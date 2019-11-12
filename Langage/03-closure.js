const closureOuModuleOuGlobale = 'closureOuModuleOuGlobale';
function externe() {
  const closure = 'closure';
  function interne() {
    const locale = 'locale';
    console.log(locale, closure, closureOuModuleOuGlobale);
  }
  interne();
}
externe();

// console.log(typeof interne); // undefined

// pile d'appels
// ^
// |
// |interne
// |externe
// +---------------------------------> temps
