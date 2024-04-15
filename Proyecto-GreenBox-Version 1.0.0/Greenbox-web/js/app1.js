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