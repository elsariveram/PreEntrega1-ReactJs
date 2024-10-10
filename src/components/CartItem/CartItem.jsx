import './CartItem.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";



const CartItem = ({ id, name, price, quantity, image }) => {
    const { removeItem} = useContext(CartContext);
    return (
        <div className="cart-item">
            <Link to={`/item/${id}`}>
            <img src={image} alt={name} className="cart-item-image" />
            </Link>
            
            <div className="cart-item-details">
                <h3>{name}</h3>
                <p>Precio: ${price}</p>
                <p>Id: {id}</p>
                <p>Cantidad: {quantity}</p>
                <p>Subtotal Item: ${price * quantity}</p>
                <button onClick={() => removeItem(id)} className="remove-button">Eliminar</button>
            </div>
        </div>
    );
};

export default CartItem;