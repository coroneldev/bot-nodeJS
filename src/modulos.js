var modulos = {
    /*accesoa a los modulos*/
    /*Acceso Inicial*/
    0: {
        descripcion: "Bienvenida",
        obj: require("./modulos/index"),
    },
    /* Modulos de Areas*/
    1: {
        descripcion: "Menu",
        obj: require("./modulos/menu_area"),
    },
    2: {
        descripcion: "Administrativo",
        obj: require("./modulos/administrativo"),
    },

    3: {
        descripcion: "Financiero",
        obj: require("./modulos/financiero"),
    },
    4: {
        descripcion: "Academico",
        obj: require("./modulos/academico"),
    },

    /*Sub Modulos de los deparatamentos dependientes*/
    /*Admiministrativos*/
    5: {
        descripcion: "RRHH",
        obj: require("./modulos/rrhh"),
    },
    /*Finacieros*/
    6: {
        descripcion: "Valores",
        obj: require("./modulos/valores"),
    },
    /*Academicos*/
    7: {
        descripcion: "Admisiones",
        obj: require("./modulos/admisiones"),
    },
    8: {
        descripcion: "Pregrado",
        obj: require("./modulos/pregrado"),
    },
    9: {
        descripcion: "Posgrado",
        obj: require("./modulos/posgrado"),
    },
    10: {
        descripcion: "Titulos",
        obj: require("./modulos/titulos"),
    },
    11: {
        descripcion: "Manejador_Admin",
        obj: require("./modulos/men_adm"),
    },
    12: {
        descripcion: "Manejador_Finan",
        obj: require("./modulos/men_fin"),
    },
    13: {
        descripcion: "Manejador_Acad",
        obj: require("./modulos/men_aca"),
    },
    14: {
        descripcion: "Finaliza",
        obj: require("./modulos/final"),
    },

};
exports.step = modulos;