import { Link } from "react-router-dom";
import "./Item.css";

const Item = ({ id, name, price, image, description }) => {

    
    return (
        <article className="CardItem">
            <div className="card__header">
                <h2 className="card__title">{name}</h2>
            </div>
            <picture className="card__picture">
                <img
                    className="card__img"
                    src={image}
                    alt={name}
                />
            </picture>
            <div className="card__body">
                
                <p className="card__price">${price}</p>
                <p className="card__description"> {description}</p>
                </div>
            <div>
                <Link to={`/item/${id}`} className="card__button">Ver Detalle</Link>
            </div>
               </article>
    );
};
export default Item