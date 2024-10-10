import { useState, useEffect } from "react";

import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom"; 

// css
import './ItemDetailContainer.css';

import { getDoc, doc } from "firebase/firestore"; 
import { db } from "../../firebase/firebaseConfig"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const {ItemId} = useParams()

    useEffect(() => {
        if (ItemId) {
            setLoading(true);  // Establecer estado de carga en true mientras se obtiene el producto

            // Crear referencia al documento en Firestore usando el ItemId
            const productRef = doc(db, "items", ItemId);  // "items" es el nombre de tu colección en Firestore

            getDoc(productRef)
                .then((docSnapshot) => {
                    if (docSnapshot.exists()) {
                        const data = docSnapshot.data();
                        setProduct({ id: docSnapshot.id, ...data });  // Combinar el ID del documento con sus datos
                    } else {
                        console.log("No se encontró el producto");
                    }
                })
                .catch((error) => {
                    console.error("Error al obtener el producto:", error);
                })
                .finally(() => {
                    setLoading(false);  // Establecer estado de carga en false al finalizar la consulta
                });
        }
    }, [ItemId]);
    
    if (loading) {
        return <div>Loading...</div>;  // Mostrar mensaje de carga mientras se obtiene el producto
    }

    if (!product) {
        return <div>No se encontró el producto.</div>;  // Mensaje si no se encuentra el producto
    }

    return (
        <div className="ItemDetailContainer">
            <ItemDetail 
                id={product.id} 
                name={product.name} 
                price={product.price} 
                image={product.image} 
                stock={product.stock} 
                description={product.description}
            />
        </div>
    );
};

export default ItemDetailContainer