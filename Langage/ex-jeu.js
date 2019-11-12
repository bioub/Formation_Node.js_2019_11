const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function jouer() {
  rl.question('What do you think of Node.js? ', (answer) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${answer}`);

    // pour rejouer
    // jouer();

    // pour terminer
    // rl.close();
  });
}

jouer();

// pile d'appels
// ^
// |                  question         question
// |question          jouer            jouer
// |jouer             =>               =>
// +------------------ENTREE-----------ENTREE-----------> temps
//
