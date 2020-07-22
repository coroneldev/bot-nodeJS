const administrativas = require("../administrativa");
const base = require("../base");

function execute(user, msg) {

    let menu = "DEPARATAMENTOS \n";

    Object.keys(administrativas.administrativa).forEach((value) => {
        let elemento = administrativas.administrativa[value];
        menu += `${elemento.nombre_dep} \n`;
    });
    /* men_adm*/

    console.log(msg);

    base.db[user].modulo = 11;

    return [
        menu,
    ];

}
exports.execute = execute;








