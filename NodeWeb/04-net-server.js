const net = require('net');

const server = net.createServer();

server.on('connection', (socket) => {
  socket.pipe(process.stdout);

  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-type: text/plain\r\n');
  socket.write('\r\n');
  socket.write('Hello\r\n');
  socket.end('\r\n');
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('Le port 8000 est déjà occupé');
  }
})

server.once('listening', () => {
  console.log('Le server a démarré sur le port 8000');
})

server.listen(8000);
