import Item from '../Item/Item'
import './ItemList.css'


const ItemList = ({ products }) => {
    return (
        <div className="ListGroup">
            {products.map(product => <Item  key={product.id}  id ={product.id} name={product.name} price={product.price} image={product.image} description={product.description} />)}

        </div>

    )

}


export default ItemList