const menus = require("../menu");
const base = require("../base");

function execute(user, msg) {

    let menu = "Opciones\n\n";

    Object.keys(menus.menu).forEach((value) => {
        let elemento = menus.menu[value];
        menu += `${elemento.nombre_area} \n`;
    });

    //menu_area
    base.db[user].modulo = 1;

    console.log("Celular: " + user);

    return [
        `📶 Universidad Publica de El Alto`,
        `Hola soy tu asistente virtual 🤖, espero poder ayudarte digite una de las siguentes`,
        menu,
    ];
}

exports.execute = execute;