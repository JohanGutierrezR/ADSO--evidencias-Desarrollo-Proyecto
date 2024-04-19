import { Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext"
import "./css/Navbar.css"
import logo from "./img/Logo.png"
import menu from "./img/menu.png"

function Navbar() {
    const { isAuthenticated, logout, user} = useAuth();
    
  return (
    <header>
        <div className="back">
        <div className="menu container">
            <Link to='/' className="logo">
            <img src={logo} alt="logo" />
          <h2>GreenBox <br/><span>Te conecta con el campo</span></h2>
            </Link>
            <input type="checkbox" id="menu" />
            <label htmlFor="menu"><img src={menu} className="menu-icono" />
          </label>
    <nav className="navbar">
        <Link to={
            isAuthenticated ? "/tasks" : "/"
        }>
        </Link>
        <ul>
            {isAuthenticated ? ( 
                <>     
            <li>
                <Link to='/tasks'>Bienvenido {user.username}</Link>
            </li>
            <li>
                <Link to='/add-task'>Agregar Productos</Link>
            </li>
            <li>
            <Link to='/categorias'>Categorias</Link>
            </li>
            <li>
            <Link to='/ayuda'>Ayuda</Link>
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
    </div>
    </div>
    </header>
  )
}

export default Navbar