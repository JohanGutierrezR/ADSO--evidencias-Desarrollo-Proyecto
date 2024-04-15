var imagenes1 = document.querySelectorAll(".imagen1");
var indiceImagen1 = 0;

var imagenes2 = document.querySelectorAll(".imagen2");
var indiceImagen2 = 0;

var imagenes3 = document.querySelectorAll(".imagen3");
var indiceImagen3 = 0;

var imagenes4 = document.querySelectorAll(".imagen4");
var indiceImagen4 = 0;

var imagenes5 = document.querySelectorAll(".imagen5");
var indiceImagen5 = 0;

var imagenes6 = document.querySelectorAll(".imagen6");
var indiceImagen6 = 0;

var imagenes7 = document.querySelectorAll(".imagen7");
var indiceImagen7 = 0;

var imagenes8 = document.querySelectorAll(".imagen8");
var indiceImagen8 = 0;

var imagenes9 = document.querySelectorAll(".imagen9");
var indiceImagen9 = 0;

var imagenes10 = document.querySelectorAll(".imagen10");
var indiceImagen10 = 0;

function mostrarSiguienteImagen1() {
    imagenes1[indiceImagen1].style.display = "none";
    indiceImagen1 = (indiceImagen1 + 1) % imagenes1.length;
    imagenes1[indiceImagen1].style.display = "block";
}

function mostrarSiguienteImagen2() {
    imagenes2[indiceImagen2].style.display = "none";
    indiceImagen2 = (indiceImagen2 + 1) % imagenes2.length;
    imagenes2[indiceImagen2].style.display = "block";
}

function mostrarSiguienteImagen3() {
    imagenes3[indiceImagen3].style.display = "none";
    indiceImagen3 = (indiceImagen3 + 1) % imagenes3.length;
    imagenes3[indiceImagen3].style.display = "block";
}
function mostrarSiguienteImagen4() {
    imagenes4[indiceImagen4].style.display = "none";
    indiceImagen4 = (indiceImagen4 + 1) % imagenes4.length;
    imagenes4[indiceImagen4].style.display = "block";
}
function mostrarSiguienteImagen5() {
    imagenes5[indiceImagen5].style.display = "none";
    indiceImagen5 = (indiceImagen5 + 1) % imagenes5.length;
    imagenes5[indiceImagen5].style.display = "block";
}

function mostrarSiguienteImagen6() {
    imagenes6[indiceImagen6].style.display = "none";
    indiceImagen6 = (indiceImagen1 + 1) % imagenes6.length;
    imagenes6[indiceImagen6].style.display = "block";
}

function mostrarSiguienteImagen7() {
    imagenes7[indiceImagen7].style.display = "none";
    indiceImagen7 = (indiceImagen7 + 1) % imagenes7.length;
    imagenes7[indiceImagen7].style.display = "block";
}

function mostrarSiguienteImagen8() {
    imagenes8[indiceImagen8].style.display = "none";
    indiceImagen8 = (indiceImagen8 + 1) % imagenes8.length;
    imagenes8[indiceImagen8].style.display = "block";
}
function mostrarSiguienteImagen9() {
    imagenes9[indiceImagen9].style.display = "none";
    indiceImagen9 = (indiceImagen9 + 1) % imagenes9.length;
    imagenes9[indiceImagen9].style.display = "block";
}
function mostrarSiguienteImagen10() {
    imagenes10[indiceImagen10].style.display = "none";
    indiceImagen10 = (indiceImagen10 + 1) % imagenes10.length;
    imagenes10[indiceImagen10].style.display = "block";
}

function iniciarPresentacion() {
    // Oculta todas las imágenes excepto la primera
    for (var i = 1; i < imagenes1.length; i++) {
        imagenes1[i].style.display = "none";
    }
    for (var i = 1; i < imagenes2.length; i++) {
        imagenes2[i].style.display = "none";
    }
    for (var i = 1; i < imagenes3.length; i++) {
        imagenes3[i].style.display = "none";
    }
    for (var i = 1; i < imagenes4.length; i++) {
        imagenes4[i].style.display = "none";
    }
    for (var i = 1; i < imagenes5.length; i++) {
        imagenes5[i].style.display = "none";
    }
    for (var i = 1; i < imagenes6.length; i++) {
        imagenes6[i].style.display = "none";
    }
    for (var i = 1; i < imagenes7.length; i++) {
        imagenes7[i].style.display = "none";
    }
    for (var i = 1; i < imagenes8.length; i++) {
        imagenes8[i].style.display = "none";
    }
    for (var i = 1; i < imagenes9.length; i++) {
        imagenes9[i].style.display = "none";
    }
    for (var i = 1; i < imagenes10.length; i++) {
        imagenes10[i].style.display = "none";
    }
    

    // Cambiar las imágenes cada 3 segundos (3000 ms)
    setInterval(mostrarSiguienteImagen1, 3000);
    setInterval(mostrarSiguienteImagen2, 3000);
    setInterval(mostrarSiguienteImagen3, 3000);
    setInterval(mostrarSiguienteImagen4, 3000);
    setInterval(mostrarSiguienteImagen5, 3000);
    setInterval(mostrarSiguienteImagen6, 3000);
    setInterval(mostrarSiguienteImagen7, 3000);
    setInterval(mostrarSiguienteImagen8, 3000);
    setInterval(mostrarSiguienteImagen9, 3000);
    setInterval(mostrarSiguienteImagen10, 3000);
}

// Inicia la presentación cuando la página se carga
window.addEventListener("load", iniciarPresentacion);
