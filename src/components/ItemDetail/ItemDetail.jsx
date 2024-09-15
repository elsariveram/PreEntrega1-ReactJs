import ItemCount from "../ItemCount/ItemCount";


import './ItemDetail.css';


const ItemDetail = ({id, name, price, image, stock, description, category}) => {

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
                <ItemCount initial={1} stock={stock} onAdd={(quantity)=>{alert("agregado "+ quantity)}}/>
            </div>

        </article>
    )

}

export default ItemDetail