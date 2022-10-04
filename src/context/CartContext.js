import { createContext, useContext } from "react";
import { useState } from "react";

export const Context = createContext ([]);
export const useCartContext = () => useContext(Context);

const CartContext = ({children}) => {
    console.log(Context);

    const [carrito, setCarrito] = useState ([]);

    const isInCart = (id) => carrito.find(producto => producto.id === id)

    const addItem = (item, count) => {
        if(isInCart(item.id)){
            const nuevoCarrito = carrito.map(producto =>{
                if (producto.id === item.id){
                    const nuevoCount = producto.count + count 
                    return {...producto, count: nuevoCount}
                } else{
                    return producto
                }    

            })
            setCarrito(nuevoCarrito)
        } else{
            const nuevoProducto = {...item, count:count}
            setCarrito([...carrito, nuevoProducto])
        }    
    };

    const removeItem = (id) => setCarrito(carrito.filter(producto => producto.id !== id))

    const clear = () => {setCarrito([])}


    return(
        <>
        <Context.Provider value={{isInCart, addItem, removeItem, clear}}>{children}</Context.Provider>
        </>
    )
}

export default CartContext; 