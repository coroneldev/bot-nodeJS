const base = require("../base");

function execute(user, msg) {
    if (msg === "*") {
        base.db[user].modulo = 0;
        return [" ✔ 💯 UPEA !!!"];
    }
    return [
        "GRACIAS POR SU CONSULTA ESPERO HABERTE AYUDADO !!!",
        "UNIVERSIDAD PUBLICA DE EL ALTO",
        "AL SERVICIO DE SU PUEBLO",
        "DIGITE * PARA SALIR",
    ];
}

exports.execute = execute;