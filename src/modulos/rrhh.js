const administrativas = require("../administrativa");
const base = require("../base");
function execute(user, msg) {
    base.db[user].modulo = 14;
    return [
        "CERTIFICADO DE ANOS DE SERVICIO",
        "DOCENTE O ADMINISTRATIVO",
        "SOLICITUD DIRIGIDO AL DIRECTOR DE RECURSOS HUMANOS. M. Sc. Lic. VIDAL TICONA GUTIERREZ",
        "FOTOCOPIA DE CEDULA DE IDENTIDAD.",
        "EXTRACTO DE AFP (ACTUALIZADO)",
        "FOTOCOPIA DE LA ULTIMA BOLETA DE PAGO.",
        "FOTOCOPIA DEL PRIMER Y ULTIMO MEMORÁNDUM DE DESIGNACIÓN (DOCENTES O ADMINISTRATIVOS)",
        "------------------------------------------------------------------------------------",
        "SI CUENTA CON TODA ESTA DOCUMENTACION POR FAVOR PUEDE REALIZAR SU CORRESPONDIENTE TRAMITE EN HORARIOS ESTABLECIDOS",
        "GRACIAS POR SU ATENCION DIGITE OK ",
    ];
}

exports.execute = execute;