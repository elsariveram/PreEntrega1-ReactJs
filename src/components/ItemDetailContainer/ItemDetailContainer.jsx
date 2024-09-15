import { useState, useEffect } from "react";
import { getProductById } from "../../AsyncMock";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom"; 

// css
import './ItemDetailContainer.css';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const {ItemId} = useParams()

    useEffect(() => {

        if (ItemId) {
        getProductById(parseInt(ItemId))
        .then(response => {setProduct(response)})
        .catch(error => console.error(error))
        }
    }, [ItemId])
    
    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail id={product.id} name={product.name} price={product.price} image={product.image} stock={product.stock} description={product.description}/>
        </div>
    )
} 

export default ItemDetailContainer