import { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ inicio, stock, onAdd }) =>{

    const [contador, setContador] = useState (inicio);

    const sumar = () => contador < stock && setContador (contador + 1);

    const restar = () => contador > inicio && setContador (contador -1);

    return(
        <>
            <div class="ItemCountContainer">   
            <div className="ItemCount">     
            <button onClick={restar}>-</button>
            <h3>{contador}</h3>
            <button onClick={sumar}>+</button>
            </div>
            <button onClick={() => onAdd (contador)}>Agregar al carrito</button>
            </div>
        </>
    )

}

export default ItemCount;