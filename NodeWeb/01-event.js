const { EventEmitter } = require('events');

const events = new EventEmitter();

function createUser(user) {
  // TODO insert in database
  events.emit('user.created', user);
}

events.on('user.created', (user) => {
  console.log(`user ${user} created`);
});

events.once('user.created', (user) => {
  console.log(`user ${user} created (once)`);
});

createUser('romain');
createUser('jean');
createUser('eric');

