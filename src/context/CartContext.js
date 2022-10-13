import { createContext, useState, useContext } from "react";

const CartContext = createContext ([]);
export const useCartContext = () => useContext (CartContext);

export function CartContextProvider ({children}) {

    const [carrito, setCarrito] = useState([]);

    const isInCart = (id) => carrito.find(producto => producto.id === id)

    const addItem = (item, quantity) => {
        if (isInCart(item.id)){
            const newCarrito = carrito.map(producto =>{
                if (producto.id === item.id) {                    
                    const newQuantity = producto.quantity + quantity;
                    return {...producto, quantity: newQuantity}
                } else{
                    return producto
                }
            })
            setCarrito(newCarrito)
        } else{
            const newProducto = {...item, quantity:quantity}
            setCarrito([...carrito, newProducto])
        }

    }

    const removeItem = (id) => setCarrito(carrito.filter(producto => producto.id !== id))

    const clearCart = () => setCarrito ([])

    const totalPrice = () => {
        return carrito.reduce ((acumulador, producto) => acumulador += (producto.price * producto.quantity),0)
    }

    const totalQuantity = () =>{
        return carrito.reduce((acumulador, producto) => acumulador += producto.quantity,0)
    }

    return (
        <CartContext.Provider value={{
            addItem,
            removeItem,
            clearCart,
            totalPrice,
            totalQuantity,
            carrito
        }}>{children}</CartContext.Provider>
    )
}