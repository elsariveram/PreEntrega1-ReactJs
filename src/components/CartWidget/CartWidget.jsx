import Carticon from "./assets/CartWidget.svg"

import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {

    const {totalQuantity} = useContext(CartContext);

    return (
        <div>
            <Link to={`/cart`} >
              <img src={Carticon} alt="cart widget" height={20}/>
            </Link>
            
            <span>{totalQuantity() }</span>
        </div>
    
    )
}

export default CartWidget


  
    
  