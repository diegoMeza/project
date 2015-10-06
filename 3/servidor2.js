/**
 * Created by Gdaimon on 3/10/15.
 */

var servidor = require('http');

function arrancaServidor(requiere, respuesta){
    console.log('Alguien se ha conectado');
    respuesta.writeHead(200,{"Content-Type":"text/html"});
    respuesta.write('<h1>El Servidor Funciona Correctamente</h1>');
    respuesta.end();
}
servidor.createServer(arrancaServidor).listen(8080);