import ItemCount from "../ItemCount/ItemCount";
import { useContext, useState } from "react";
import "./ItemDetail.css"
import { Link } from 'react-router-dom'
import { Context } from "../../context/CartContext"


const ItemDetail = ({ item }) => {
    const [irAlCarrito, setIrAlCarrito] = useState (false); 

    const { addItem, carrito } = useContext(Context);

    const onAdd = (count) => {
        setIrAlCarrito(true)
        addItem ({item, count});
    };

    return(
        <>
        <h4>{item.name}</h4>
        <img src={item.image} height="150px" />
        <p>{item.description}</p>
        <h4>{"$"+item.price}</h4>
        {
            irAlCarrito
            ? <Link to='/cart'><button>Finalizar Compra{console.log(carrito)}</button></Link>
            :<ItemCount inicio={1} stock={item.stock} onAdd={onAdd} />
 
        }
        </>
    )
};

export default ItemDetail;


