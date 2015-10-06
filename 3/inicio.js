/**
 * Created by Gdaimon on 3/10/15.
 */

var servidor = require("./servidor2");
var enrutador = require("./enrutador");

servidor.iniciar(enrutador.enrutar);