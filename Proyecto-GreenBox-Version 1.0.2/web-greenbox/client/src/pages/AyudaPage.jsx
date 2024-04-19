import '../components/css/Ayuda.css'

export const AyudaPage = () => {
  return (
    <div>
    <div className="contenido-navegacion-ayuda">
      </div>
      <div className="encabezado-ayudas">
        <div className="formulario">
          <h1>Ayuda</h1>
          <p>¿Con qué podemos ayudarte?</p>
          <form method="post">
            <div className="ayuda">
              <input type="text" required />
              <label>Escribe lo que necesitas que te ayudemos</label>
            </div>
            <div className="menu-container">
              <div className="menu1">
                <a href="#">Ventas</a>
                <ul className="submenu">
                  <li>
                    <a href="#">Cancelar publicación</a>
                  </li>
                  <li>
                    <a href="#">Cancelar venta</a>
                  </li>
                  <li>
                    <a href="#">Preguntas sobre ventas</a>
                  </li>
                </ul>
              </div>
              <div className="menu1">
                <a href="#">Compras</a>
                <ul className="submenu">
                  <li>
                    <a href="#">Devoluciones y reembolsos</a>
                  </li>
                  <li>
                    <a href="#">Cancelar compra</a>
                  </li>
                  <li>
                    <a href="#">Preguntas sobre compras</a>
                  </li>
                </ul>
              </div>
              <div className="menu1">
                <a href="#">Transporte</a>
                <ul className="submenu">
                  <li>
                    <a href="#">Información del conductor</a>
                  </li>
                  <li>
                    <a href="#">No llega el producto</a>
                  </li>
                  <li>
                    <a href="#">Preguntas de transporte</a>
                  </li>
                </ul>
              </div>
            </div>
          </form>
        </div>
      </div>
      </div>
  )
}
