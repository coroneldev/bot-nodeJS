const menus = require("../menu");
const base = require("../base");
function execute(user, msg) {
    if (msg === "*") {
        base.db[user].modulo = 0;
        return ["Se ha Cancelado su Visita !!!"];
    }
    if (msg === "1") {
        /*Administrativo*/
        base.db[user].modulo = 2;
        return ["Obteniendo informacion Administrativa (Descripcion resumen  de todo lo admnistartivo para proseguir con la consulta) Digite #️⃣ para Continuar",];

    }
    if (msg === "2") {
        /*Financiero*/
        base.db[user].modulo = 3;
        return ["Obteniendo informacion Financiera (Descripcion resumen  de todo lo financiero para proseguir con la consulta) Digite #️⃣ para Continuar",];

    }
    if (msg === "3") {
        /*Academico*/
        base.db[user].modulo = 4;
        return ["Obteniendo informacion Academica (Descripcion resumen  de todo lo academico para proseguir con la consulta) Digite #️⃣ para Continuar",];

    }
    if (!menus.menu[msg]) {
        return [
            "Codigo es Invalido, digite Correctamente",
            "❌ Presione * para cancelar",
        ];
    }

}
exports.execute = execute;