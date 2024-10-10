import './Cart.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity() === 0) {
        return (
            <div>
                <h1 className="cart-title">Carrito de Compras</h1>
                <p>No hay productos en el carrito</p>
                <Link to="/" className="Option"> Productos</Link>
            </div>
        )
    }
    else{
        return (
            <div>
                <h1 className="cart-title">Carrito de Compras</h1>
                {cart.map(p=> <CartItem key={p.id} {...p}/>)}
                <h3> Total: ${total()}</h3>
                <button onClick={()=>clearCart()} >Vaciar carrito</button>
                <div>
                    <Link to="/checkout" className="Checkout">Checkout</Link>
                </div>
                
            </div>
        )
    }
   
}

export default Cart