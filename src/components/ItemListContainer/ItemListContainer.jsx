
import { useState, useEffect } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoryId} = useParams()

    useEffect(() => {

        setLoading(true)

        const collectionRef = categoryId 
        ? query(collection(db, "items"), where("category", "==", categoryId))
         : collection(db, "items")
         
        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return {id: doc.id, ...data}
                })
                setProducts(productsAdapted)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))


    }, [categoryId])

    return (
        <div>
            <h1 className="Title-Bienvenida">{greeting}</h1>
            {loading ? <p>Loading...</p> : <ItemList products={products} />}
        </div>
    )
}

export default ItemListContainer