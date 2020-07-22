const administrativas = require("../administrativa");
const base = require("../base");
function execute(user, msg) {

    if (msg === "*") {
        base.db[user].modulo = 0;
        return ["Se ha Cancelado su Visita !!!"];
    }
    if (msg === "1") {
        /*rrhh*/
        base.db[user].modulo = 5;
        return ["Obteniendo informacion de Recursos Humanos (Descripcion resumen  de todo lo admnistartivo para proseguir con la consulta) Digite #️⃣ para Continuar",];

    }
    

    if (!administrativas.administrativa[msg]) {
        return [
            "Codigo es Invalido, digite Correctamente",
            "❌ Presione * para cancelar",
        ];
    }
}

exports.execute = execute;