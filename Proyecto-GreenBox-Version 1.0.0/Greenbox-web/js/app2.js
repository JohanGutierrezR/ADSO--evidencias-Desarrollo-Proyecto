// tu_script.js
var ctx = document.getElementById('miGraficaCircular').getContext('2d');
var miGraficaCircular = new Chart(ctx, {
    type: 'doughnut', // Tipo de gráfica circular
    data: {
        labels: ['1 estrella', '2 estrellas', '3 estrellas', '4 estrellas', '5 estrellas'],
        datasets: [{
            data: [1, 10, 16, 30, 53], // Valores de calificación
            backgroundColor: ['#EE1818', '#888888', '#76A636', '#DADFB9', '#114e38'], // Colores
        }]
    },
});

var imagenes = document.querySelectorAll(".imagen");
var indiceImagen = 0;

        function mostrarSiguienteImagen() {
            imagenes[indiceImagen].style.display = "none";
            indiceImagen = (indiceImagen + 1) % imagenes.length;
            imagenes[indiceImagen].style.display = "block";
        }

        // Oculta todas las imágenes excepto la primera
        for (var i = 1; i < imagenes.length; i++) {
            imagenes[i].style.display = "none";
        }

        // Cambia la imagen cada 2 segundos (2000 ms)
        setInterval(mostrarSiguienteImagen, 2000);
