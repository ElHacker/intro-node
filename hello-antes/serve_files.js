var http = require('http'),
    fs = require('fs');        // Modulo para manipular archivos

// Crear un servidor http
http.createServer(function (request, response) {
  request.on('end', function() {
    // Leer un archivo
    var file = fs.createReadStream('prueba.txt');

    // Cuando el archivo este listo para ser leido
    file.on('open', function() {
      // 'Stream' de datos del archivo a la respuesta del cliente.
      file.pipe(response);
    });

    // Error al abrir archivo
    file.on('error', function(error) {
      // Imprimir error en consola de Node.js
      console.log(error);
    });
  });
}).listen(3000);  // Escuchar el puerto 3000
