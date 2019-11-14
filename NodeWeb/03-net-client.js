const net = require('net');

const socket = net.connect(80, 'example.com');

socket.pipe(process.stdout);

socket.once('connect', () => {
  socket.write('GET / HTTP/1.1\r\n');
  socket.write('Host: example.com\r\n');
  socket.end('\r\n');
});
