import React, { useState, useContext } from 'react'; 
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../../context/CartContext";

import './ItemDetail.css';


const ItemDetail = ({id, name, price, image, stock, description, category}) => {
    
    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem, cart } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id,
            name,
            price,
            stock,
            image,
        }

        addItem(item, quantity);
    }

    const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0); 

    return (
        <article className="CardItem-2">
            <div className="Header">
                <h2 className="ItemHeader">{name}</h2>
            </div>
            <picture>
                <img src={image} alt={name} className="ItemImg"/>
            </picture>
            <section>
                <p>Código del producto: {id}</p>
                <h3>{category}</h3>
                <p>Descripción: {description}</p>
                <p className="price">Valor: ${price}</p>
                <p>Stock disponible: {stock}</p>
            </section>
            <div>
                <ItemCount initial={1} stock={stock} onAdd={(quantity)=>{handleOnAdd(quantity)}} cartItemsCount={cartItemsCount}/>
            </div>

        </article>
    )

}

export default ItemDetail