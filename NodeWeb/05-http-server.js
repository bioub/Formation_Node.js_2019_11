const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write('<h2>Hello</h2>');
    res.end();
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write('<h2>Contact</h2>');
    res.end();
  } else {
    res.statusCode = 404;
    res.setHeader('Content-type', 'text/html');
    res.write('<h2>Not Found</h2>');
    res.end();
  }
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('Le port 8000 est déjà occupé');
  }
});

server.once('listening', () => {
  console.log('Le server a démarré sur le port 8000');
});

server.listen(8000);
