const bot = require('venom-bot');

const base = require("./base");
const modulos = require("./modulos");


bot.create().then((client) => start(client));

function start(client) {
    client.onMessage((message) => {
        let respuesta = modulos.step[getModulo(message.from)].obj.execute(
            message.from,
            message.body,
            message.sender.name
        );
        for (let index = 0; index < respuesta.length; index++) {
            const element = respuesta[index];
            client.sendText(message.from, element);
        }
    });
}

function getModulo(user) {
    if (base.db[user]) {
        //Si este número existe en la base de datos
        return base.db[user].modulo;
    } else {
        //Si es la primera vez que nos contacta
        base.db[user] = {
            /*index*/
            modulo: 0,
            itens: [],
        };
        return base.db[user].modulo;
    }
}
