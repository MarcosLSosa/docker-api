const http = require('http');

const puerto = 3000;

const server = http.createServer((req, res) => {
  res.end('Hola desde CLASE');
});

server.listen(puerto, () => {
  console.log(`Servidor corriendo en puerto ${puerto}`);
});