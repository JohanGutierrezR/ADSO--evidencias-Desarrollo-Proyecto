import { Link } from "react-router-dom"
import '../components/css/Categorias.css'

function CategoriasPage() {
  return (
    <>
    <div className="categorias">

            <h1>Categorias Disponibles</h1>

        <div className="botones-categorias">
        <Link to="/frutas"><button>Frutas</button></Link>
        <Link to="/vegetales"><button>Vegetales</button></Link>
        <Link to="/cereales"><button>Cereales</button></Link>
        </div>
        <div className="botones-categorias">
        <Link to="/legumbres"><button>Legumbres</button></Link>
        <Link to="/especias"><button>Especias</button></Link>
        </div>
        </div>
    </>
  )
}

export default CategoriasPage