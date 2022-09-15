import { useState } from "react";
import "./ItemCount.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemCount = ({ inicio, stock, onAdd }) =>{

    const [contador, setContador] = useState (inicio);

    const sumar = () => contador < stock && setContador (contador + 1);

    const restar = () => contador > inicio && setContador (contador -1);

    const agregar = () => toast.success("Agregaste tu producto!");

    return(
        <>
            <div className="itemListContainer">        
            <button onClick={restar}>-</button>
            <h3>{contador}</h3>
            <button onClick={sumar}>+</button>
            <button onClick={agregar}>Agregar al carrito</button>
            <ToastContainer 
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            </div>
        </>
    )

}

export default ItemCount;