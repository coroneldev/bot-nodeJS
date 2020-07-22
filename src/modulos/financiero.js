const financieras = require("../financiera");
const base = require("../base");

function execute(user, msg) {

    let menu = "DEPARATAMENTOS \n";
    Object.keys(financieras.financiera).forEach((value) => {
        let elemento = financieras.financiera[value];
        menu += `${elemento.nombre_dep} \n`;
    });

    /*men_fin*/
    base.db[user].modulo = 13;
    return [
        menu,
    ];

}
exports.execute = execute;








