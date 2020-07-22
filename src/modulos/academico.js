const academicas = require("../academica");
const base = require("../base");

function execute(user, msg) {
    let menu = "DEPARATAMENTOS \n";
    Object.keys(academicas.academica).forEach((value) => {
        let elemento = academicas.academica[value];
        menu += `${elemento.nombre_dep} \n`;
    });
    /*men_aca*/
    base.db[user].modulo = 14;
    return [
        menu,
    ];

}
exports.execute = execute;





