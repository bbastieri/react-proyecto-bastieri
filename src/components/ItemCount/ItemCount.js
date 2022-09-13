import { useState } from "react";
import "./ItemCount.css"

const ItemCount = ({ inicio, stock, onAdd }) =>{

    const [contador, setContador] = useState (inicio);

    const sumar = () => contador < stock && setContador (contador + 1);

    const restar = () => contador > inicio && setContador (contador -1);

    return(
        <>
            <div className="itemListContainer">        
            <button onClick={restar}>-</button>
            <h2>{contador}</h2>
            <button onClick={sumar}>+</button>
            <button>Agregar al carrito</button>
            </div>
        </>
    )

}

export default ItemCount;