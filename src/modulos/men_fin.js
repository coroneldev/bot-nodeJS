const financieras = require("../financiera");
const base = require("../base");
function execute(user, msg) {

    if (msg === "*") {
        base.db[user].modulo = 0;
        return ["Se ha Cancelado su Visita !!!"];
    }
    if (msg === "1") {
        /*valores*/
        base.db[user].modulo = 6;
        return ["Obteniendo informacion de Valores (Descripcion resumen  de todo lo admnistartivo para proseguir con la consulta) Digite #️⃣ para Continuar",];

    }

    if (!financieras.financiera[msg]) {
        return [
            "Codigo es Invalido, digite Correctamente",
            "❌ Presione * para cancelar",
        ];
    }
}

exports.execute = execute;