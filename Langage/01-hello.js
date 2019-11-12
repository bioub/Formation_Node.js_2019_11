/**
 * Ma fonction hello
 * @param {string} name Le prénom
 * @returns {string} Le message de bienvenue
 */
function hello(name) {
  return `Hello ${name.toUpperCase()} !`;
}

const prenoms = ['Jean', 'Eric'];

prenoms.forEach((prenom) => {
  console.log(hello(prenom));
});
