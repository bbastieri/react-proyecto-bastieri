import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import "./ItemDetail.css"
import  { Link } from 'react-router-dom'


const ItemDetail = ({item}) => {
    const [irAlCarrito, setIrAlCarrito] = useState (false); 

    const onAdd = () => {setIrAlCarrito(true)};


    return(
        <>
        <h4>{item.name}</h4>
        <img src={item.image} height="150px" />
        <p>{item.description}</p>
        <h4>{"$"+item.price}</h4>
        {
            irAlCarrito
            ? <Link to='/cart'><button>Finalizar Compra</button></Link>
            :<ItemCount inicio={1} stock={item.stock} onAdd={onAdd} />
 
        }
        </>
    )
};

export default ItemDetail;


