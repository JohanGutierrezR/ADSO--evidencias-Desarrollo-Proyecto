import '../components/css/Fecha.css';
import { Link } from 'react-router-dom';

const FechaPage = () => {
  return (
    <div>      
    <div className='fecha'>
    <div className="texto-encabezado-izquierdo">
        <p>Compra de productos 10 de abril del 2024. <br /><br />
            Entre estimada el 11 de abril del 2024. <br /><br />
            Productos 3 $ 60.823.</p>
        <i className="fa-solid fa-map-location-dot"></i>
        <div className="bta-calendario">
            <Link to="/comprar"><button>Entrega</button></Link></div>
    </div>
    <div className="texto-encabezado-derecho">
        <div className="calendario">
            <h1>Octubre 2023</h1>
            <ol>
                <li className="day-name">Dom</li>
                <li className="day-name">Lun</li>
                <li className="day-name">Mar</li>
                <li className="day-name">Mier</li>
                <li className="day-name">Jue</li>
                <li className="day-name">Vie</li>
                <li className="day-name">Sab</li>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
                <li>5</li>
                <li>6</li>
                <li>7</li> 
                <li>8</li>
                <li>9</li>
                <li className="color">10</li>
                <li className="color">11</li>
                <li>12</li>
                <li>13</li>
                <li>14</li>
                <li>15</li>
                <li>16</li>
                <li>17</li>
                <li>18</li>
                <li>19</li>
                <li>20</li>
                <li>21</li>
                <li>22</li>
                <li>23</li>
                <li>24</li>
                <li>25</li>
                <li>26</li>
                <li>27</li>
                <li>28</li>
                <li>29</li>
                <li>30</li>
                <li>31</li>
            </ol>
        </div>
    </div>
</div></div>
  )
}

export default FechaPage