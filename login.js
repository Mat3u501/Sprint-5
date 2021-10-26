let registros = [];

function login(){
    if (correo in registros && contrasena in registros){
        alert("Se encuentra registrado");
        return true;
    }
    else{
        alert("No se encuentra registrado");
        return false;
    }
    if (validarCAPTCHA() == true){
        return true;
    }
    else{
        alert("Ha ocurrido un error, intente de nuevo");
        return false;
    }
}

function agregarRegistro() {
    var nomb = document.getElementById("nombre");
    var apell = document.getElementById("apellido");
    var tel = document.getElementById("telefono");
    var corr = document.getElementById("correo");
    var contr = document.getElementById("contrasena");

    var almacenarDato = {
        nombre: nomb.value,
        apellido: apell.value,
        telefono: tel.value,
        correo: corr.value,
        contrasena: contr.value,
    };

    registros.push(almacenarDato);
}

function validarCAPTCHA(capt){
    //¿Qué resultado da el cuarto de un tercio de 12000?
    var capt;
    capt = document.getElementById("captcha").value;
    if (capt == 1000){
        alert("captcha válido");
        return true;
    }
    else{
        return false;
    }
}


module.exports.login = login;
module.exports.registros = registros;
module.exports.validarCAPTCHA = validarCAPTCHA;
module.exports.agregarRegistro = agregarRegistro;