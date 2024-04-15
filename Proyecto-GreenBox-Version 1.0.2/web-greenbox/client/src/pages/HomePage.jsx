import imagen1 from "../components/img/frutas/Fresas/imagen1.jpeg";
import imagen2 from "../components/img/Cereales/Avena/image1.jpeg";
import imagen3 from "../components/img/Vegetales/Tomate/image1.jpeg";
import "../components/css/HomePage.css";
import img from "../components/img/Cereales/Avena/image2.jpeg";
import img1 from "../components/img/Especias/Cilantro/images.jpeg";
import img2 from "../components/img/frutas/Banano/image2.jpg";
import img3 from "../components/img/legumbres/Frijol/image2.jpg";
import img4 from "../components/img/Vegetales/Ahuyama/ahuyama1.jpeg";
import img5 from "../components/img/Vegetales/Calabaza/image2.jpeg";
import img6 from "../components/img/legumbres/Habas/habas1.jpeg";
import img7 from "../components/img/frutas/Fresas/image5.jpeg";
import img8 from "../components/img/Especias/Comino/imagen2.jpeg";
import img9 from "../components/img/Cereales/Maiz/imagen1.jpg";
import img10 from "../components/img/Lugares de Cultivo/imagen1.jpg";
import img11 from "../components/img/Lugares de Cultivo/imagen2.jpg";
import img12 from "../components/img/Lugares de Cultivo/imagen3.jpg";
import img13 from "../components/img/Lugares de Cultivo/imagen4.jpg";
import img14 from "../components/img/Lugares de Cultivo/imagen5.jpg";
import img15 from "../components/img/Lugares de Cultivo/imagen6.jpg";

function HomePage() {
  return (
    <div>
      <div className="encabezadoHome">
        <div className="texto-encabezado">
          <h1>
            Reparto de diferentes productos <br />
            agricolas cultivados en tu localidad
          </h1>
        </div>
      </div>
      <div className="hacemos">
        <h2>Que Hacemos</h2>
        <div className="contenido-hacemos ">
          <div className="conectamos">
            <img src={imagen1} alt="imagen1" />
            <p>
              Conectamos consumidores y próductores directamente logrando mayor
              calidad y ahorro
            </p>
          </div>
          <div className="conectamos">
            <img src={imagen2} alt="imagen2" />
            <p>
              cuidamos el medioambiente, nos enfocamos en los mercados locales
              evitando los costos económicos y medioambientales del transporte
            </p>
          </div>
          <div className="conectamos">
            <img src={imagen3} alt="imagen3" />
            <p>
              Creemos que la buena voluntad de las personas puede cambiar el
              mundo. Únete a nosotros haz parte de la revolución verde
            </p>
          </div>
        </div>
      </div>
      <div className="productos ">
        <div className="title">
          <h1>Productos Agricolas</h1>
          <div className="texto">
            <p>
              conectamos a los consumidores directamente con los productores
              evitando a los intermediarios brindando mayor calidad a menor
              precio
            </p>
          </div>
        </div>
        <div className="imagenes">
          <div className="contenido-imagenes contenedor">
            <div className="imge">
              <img className="imagen1" src={img} alt="Avena" />

              <p>Avena</p>
            </div>
            <div className="imge">
              <img className="imagen2" src={img1} alt="cilantro" />

              <p>Cilantro</p>
            </div>
            <div className="imge">
              <img className="imagen3" src={img2} alt="banano" />

              <p>Bananos</p>
            </div>
            <div className="imge">
              <img className="imagen4" src={img3} alt="frijoles" />

              <p>Frijoles</p>
            </div>
            <div className="imge">
              <img className="imagen5" src={img4} alt="calabazas" />

              <p>Calabazas</p>
            </div>
          </div>
        </div>
        <div className="imagenes1">
          <div className="imge">
            <div className="contenido-imagenes contenedor">
              <div className="imge">
                <img className="imagen6" src={img5} alt="ahuyama" />
                <p>Ahuyama</p>
              </div>
              <div className="imge">
                <img className="imagen7" src={img6} alt="Habas" />
                <p>Habas</p>
              </div>
              <div className="imge">
                <img className="imagen8" src={img7} alt="fresa" />
                <p>Fresa</p>
              </div>
              <div className="imge">
                <img className="imagen9" src={img8} alt="comino" />
                <p>Comino</p>
              </div>
              <div className="imge">
                <img className="imagen10" src={img9} alt="maiz" />
                <p>Maiz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lugares">
        <div className="title1">
          <h1>Lugares de Cultivos</h1>
          <div className="texto1">
            <p>
              Lograr cambiar el concepto del agronegocio en Colombia a través de
              la tecnología Ofrecer mayores ganancias a los productores Precios
              más económicos y mayor calidad a los consumidores 100 % de
              clientes satisfechos
            </p>
          </div>
          <div className="contenido-lugares">
            <div className="img">
              <img className="lugar1" src={img10} alt="lugar" />
              <img className="lugar1" src={img11} alt="lugar" />
              <img className="lugar1" src={img12} alt="lugar" />
              <img className="lugar1" src={img13} alt="lugar" />
              <img className="lugar1" src={img14} alt="lugar" />
              <img className="lugar1" src={img15} alt="lugar" />
            </div>
          </div>
        </div>
        <h2>GreenBox</h2>
      </div>
    </div>
  );
}

export default HomePage;
