// Incluir modulo http
var http = require('http');

// Crear servidor.
// La funcion que se pasa como parametro es llamada en cada request que se hace.
// La variable 'request' tiene todos los parametros de un request hecho al server.
// La variable 'response' te permite responder al cliente con diferentes headers, datos, etc...
http.createServer(function (request, response) {
  // Adjuntar una funcion 'callback' anonima
  // la funcion 'callback' se ejecuta cuando el evento 'end' se activa.
  request.on('end', function() {
    // Escribir los 'headers' de la respuesta
    // 200 es el codigo de estatus de HTTP y significa 'exito' en la peticion
    // al servidor.
    // El segundo parametro es un objeto que define valores para
    // distintos campos del header.
    response.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    // Enviar data y el end response
    response.end('Hello World!');
  });
}).listen(3000);  // Escuchar el puerto 3000
