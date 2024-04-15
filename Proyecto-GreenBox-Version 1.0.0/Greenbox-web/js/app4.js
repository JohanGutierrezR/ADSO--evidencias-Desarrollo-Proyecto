// Obtiene los días del mes actual
function getDiasMes(mes, anio) {
    // Crea un array para almacenar los días del mes
    var dias = [];

    // Itera sobre los días del mes
    for (var i = 1; i <= diasEnMes[mes]; i++) {
        // Agrega el día al array
        dias.push(i);
    }

    // Devuelve el array con los días del mes
    return dias;
}

// Obtiene la fecha actual
var fecha = new Date();

// Obtiene el mes y el año de la fecha actual
var mes = fecha.getMonth();
var anio = fecha.getFullYear();

// Obtiene los días del mes actual
var dias = getDiasMes(mes, anio);

// Itera sobre las celdas de la tabla
for (var i = 0; i < 7; i++) {
    // Asigna el día del mes a la celda
    document.querySelector("tbody tr td:nth-child(" + (i + 1) + ")").textContent = dias[i];
}
