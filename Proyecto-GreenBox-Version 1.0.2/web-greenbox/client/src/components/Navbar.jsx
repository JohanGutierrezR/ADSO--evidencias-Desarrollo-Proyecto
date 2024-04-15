import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import "./css/Navbar.css"
import logo from "./img/Logo.png"

function Navbar() {
    const { isAuthenticated, logout, user} = useAuth();
    
  return (
    <header className="encabezado">
    <nav className="contenido-navegacion">
        <Link to={
            isAuthenticated ? "/tasks" : "/"
        }>
      <div className="logo">
        <img src={logo} alt="logo" />
          <h2>GreenBox <br/><span>Te conecta con el campo</span></h2>
          
        </div>
        </Link>
        <ul className=" navegacion">
            {isAuthenticated ? ( 
                <>     
            <li>
                Bienvenido {user.username}
            </li>
            <li>
                <Link to='/add-task'>Agregar Productos</Link>
            </li>
            <li>
                <Link to='/' onClick={() => {
                    logout();
                }}>Cerrar seccion</Link>
            </li>
            </>  
            ) : (
                <>     
                <li>
                    <Link to='/login'>Iniciar Seccion</Link>
                </li>
                <li>
                    <Link to='/register'>Registrarse</Link>
                </li>
                </> 
            )}
        </ul>
    </nav>
    </header>
  )
}

export default Navbar