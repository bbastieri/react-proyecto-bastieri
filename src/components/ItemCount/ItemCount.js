import { useState } from "react";
import "./ItemCount.css";
import { Button } from "@mui/material";


const ItemCount = ({ inicio, stock, onAdd }) =>{

    const [contador, setContador] = useState (inicio);

    const sumar = () => contador < stock && setContador (contador + 1);

    const restar = () => contador > inicio && setContador (contador -1);

    return(
        <>
            <div className="itemListContainer">        
            <button onClick={restar}>-</button>
            <h3
            >{contador}</h3>
            <button onClick={sumar}>+</button>
            <Button onClick={() => onAdd (contador)}>Agregar al carrito</Button>
            </div>
        </>
    )

}

export default ItemCount;