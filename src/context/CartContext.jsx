
import React, { createContext, useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const CartContext = createContext(
    {
        cart: [],
    }
)


export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    

    const showSwal = (message) => {
        withReactContent(Swal).fire({
          title: message,
          confirmButtonText: 'Aceptar', // Texto del botón de confirmación
        });
      };

    
   
    const addItem = (item, quantity) => {
        if (!isInCart(item.id)) {
            // Si el artículo no está en el carrito,  lo agregamos
            showSwal("¡Agregado "+ quantity+" al Carrito!")
            setCart(prev => [...prev, { ...item, quantity }]);
            
        } else {
            // Si el artículo ya está en el carrito, verificamos la cantidad
            setCart(prev => {
                // Encontrar el artículo existente en el carrito
                const cartItem = prev.find(cartItem => cartItem.id === item.id);
                
                // Verificamos si la suma de la cantidad actual y la nueva supera el stock
                if (cartItem.quantity + quantity > item.stock) {
                    showSwal('La cantidad supera el stock disponible.')
                    return prev; // No se realiza ningún cambio en el carrito
                } else {
                    // Si no supera el stock, actualizamos la cantidad
                    showSwal("¡Agregado "+ quantity+" al Carrito!")
                    return prev.map(cartItem =>
                        cartItem.id === item.id
                            ? { ...cartItem, quantity: cartItem.quantity + quantity }
                            : cartItem
                    );
                }
            });
            console.error('El producto ya se encuentra en el carrito');
        }
    }
    

    const removeItem = (itemId) => {
        
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
        
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const totalQuantity = () => {
        
            return cart.reduce((acc, prod) => acc + prod.quantity, 0);
        
        
    }
    

    const total = () => {
        return cart.reduce((acc, prod) => acc + prod.quantity * prod.price, 0)
    }
    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}>
            {children}
        </CartContext.Provider>
    )

}