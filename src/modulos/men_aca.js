const academicas = require("../academica");
const base = require("../base");
function execute(user, msg) {

    if (msg === "*") {
        base.db[user].modulo = 0;
        return ["Se ha Cancelado su Visita !!!"];
    }

    if (msg === "1") {
        /*Admisiones*/
        base.db[user].modulo = 7;
        return ["Obteniendo informacion de Admisiones (Descripcion resumen  de todo lo admnistartivo para proseguir con la consulta) Digite #️⃣ para Continuar",];

    }
    if (msg === "2") {
        /*Posgrado*/
        base.db[user].modulo = 8;
        return ["Obteniendo informacion de Posgrado (Descripcion resumen  de todo lo admnistartivo para proseguir con la consulta) Digite #️⃣ para Continuar",];

    }
    if (msg === "3") {
        /*Pregrado*/
        base.db[user].modulo = 9;
        return ["Obteniendo informacion Pregrado (Descripcion resumen  de todo lo admnistartivo para proseguir con la consulta) Digite #️⃣ para Continuar",];

    }
    if (msg === "4") {
        /*Titulacion*/
        base.db[user].modulo = 10;
        return ["Obteniendo informacion de Titulacion (Descripcion resumen  de todo lo admnistartivo para proseguir con la consulta) Digite #️⃣ para Continuar",];

    }

    if (!academicas.academica[msg]) {
        return [
            "Codigo es Invalido, digite Correctamente",
            "❌ Presione * para cancelar",
        ];
    }
}

exports.execute = execute;