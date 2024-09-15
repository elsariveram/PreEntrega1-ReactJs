
import { useState, useEffect } from "react"
import { getProducts, getProductsByCategory } from "../../AsyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"


const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    const {categoryId} = useParams()

    useEffect(() => {
            const asyncFunc = categoryId ? getProductsByCategory : getProducts

            asyncFunc(categoryId)
            .then(response => {setProducts(response)})
            .catch(error => console.error(error))

    }, [categoryId])

    return (
        <div>
            <h1 className="Title-Bienvenida">{greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer