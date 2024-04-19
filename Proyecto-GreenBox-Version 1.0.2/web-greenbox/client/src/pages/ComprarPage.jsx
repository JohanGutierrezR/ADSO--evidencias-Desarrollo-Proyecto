import '../components/css/Comprar.css';
import ruta from '../components/img/ruta.jpg';
import { Link } from 'react-router-dom';

const ComprarPage = () => {
  return (
    <div className="containe1">
      <div className="ruta">
        <h1>Ruta de entrega</h1>
        <div className="imagen-box">
          <img src={ruta} alt="ruta de entrega" />
          <p className="text1">Salida: 10 de abril del 2024 - LLegada: 11 de abril del 2024</p>
        </div>
      </div>
      <div className="bta">
        <Link to="/fecha">
          <button>Fecha de Entrega</button>
        </Link>
      </div>
    </div>
  );
};

export default ComprarPage;
