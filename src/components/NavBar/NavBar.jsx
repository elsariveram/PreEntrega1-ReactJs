
import Cartwidget from "../CartWidget/CartWidget"
const NavBar = () => {
    return (    
        <nav >
            <ul style={{listStyle: 'none'}}>
                <li><a href="#">BiciStore</a></li>
                <li><a href="#">Bicicletas</a></li>
                <li><a href="#">Accesorios</a></li>
                <li><a href="#">Indumentaria</a></li>
                <li><Cartwidget/></li>
            </ul>
        </nav>
        
    )
}

export default NavBar