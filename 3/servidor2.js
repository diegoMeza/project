/**
 * Created by Gdaimon on 3/10/15.
 */

var servidor = require('http');
var url = require('url');

function iniciar(enrutar) {
    function arrancaServidor(requiere, respuesta) {

        var ruta = url.parse(requiere.url).pathname;
        console.log('Alguien se ha conectado');

        enrutar(ruta);


        respuesta.writeHead(200, {"Content-Type": "text/html"});
        respuesta.write('<h1>El Servidor Funciona Correctamente</h1>');
        respuesta.end();
    }

    servidor.createServer(arrancaServidor).listen(8080);
}

exports.iniciar = iniciar;