
import CartWidget from "../CartWidget/CartWidget"
import { NavLink, Link } from "react-router-dom"
import './NavBar.css'

const NavBar = () => {
    return (    
        <nav className="NavBar">
            <ul style={{listStyle: 'none'}}>
                <li>
                    <Link to={'/'}>BiciStore</Link>
                    </li>
                <li>
                    <NavLink to={'/category/bicicletas'} activeClassName="active">Bicicletas</NavLink>
                    </li>
                <li>
                    <NavLink to={'/category/accesorios'} activeClassName="active">Accesorios</NavLink>
                    </li>
                <li>
                    <NavLink to={'/category/indumentaria'} activeClassName="active">Indumentaria</NavLink>
                    </li>
                <li><CartWidget/></li>
            </ul>
        </nav>
        
    )
}

export default NavBar