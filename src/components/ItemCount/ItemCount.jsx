import { useState } from "react";
import './ItemCount.css'
//COMPONENTE PARA CONTAR ITEMS QUE SE AGREGAN O QUITAN AL CARRITO
const ItemCount = ({stock, initial, onAdd}) => { //consta de 3 props para montarlo en el ui: stock inicial, el valor incial del contador y una función para incrementar el contador segun el stock disponible
   
    //ESTADO DE CANTIDAD 
                    
    const [quantity, setQuantity] = useState(initial) 
                    
    // para cambiar el valor del contador, con cantidad y cambiar cantidad,el valor inicial es el PROP del valor inicial del contador (initial).

                //FUNCION PARA INCREMENTAR CONTADOR +
                const increment = () => {

                    if (quantity < stock) {

                        setQuantity(quantity + 1) //para incrementar la cantidad del ESTADO segun STOCK DISPONIBLE
                    } 

                    }

                // FUNCION PARA DECREMENTAR CONTADOR -
                const decrement = () => {
                    if (quantity > 1) {
                        setQuantity(quantity - 1)  //solo si el valor del contador es mayor a 1, se puede decrementar el contador, asi no pasa a 0 o negativo
                    }}
            
            return (    //lo que muestra el componente

                <div className="Counter">
                    <div className="controls">
                        <button className="Button"onClick={decrement}>-</button>  {/* //boton menos */}
                        <h4>{quantity}</h4>  {/* //texto cantidad del contador */}
                        <button className="Button"onClick={increment}>+</button>  {/* //boton mas */}
                    </div>
                    <div>
                        <button className="Button" onClick={()=> onAdd(quantity)} disabled={!stock}> {/* //boton agregar cart */}
                            {/* //aqui se usa el PROP de funcion onAdd con el estado de la cantidad del contador */}
                            Agregar al carrito</button>
                    </div>
                    
                </div>
            )
            }


            export default ItemCount