import ItemCount from "../ItemCount/ItemCount";
import { useState } from "react";
import "./ItemDetail.css"
import { Link } from 'react-router-dom'
import { useCartContext } from "../../context/CartContext";



const ItemDetail = ({ item }) => {

    const [irAlCarrito, setIrAlCarrito] = useState (false); 

    const {addItem} = useCartContext();

    const onAdd = (quantity) => {
        addItem (item, quantity)
        setIrAlCarrito(true)
    };

    return(
        <div class="DetailCard">
        <h4>{item.name}</h4>
        <img src={item.image} height="150px" alt={item.description} />
        <p>{item.description}</p>
        <h3>{"$"+item.price}</h3>
        {
            irAlCarrito
            ? 
                <div class="PurchaseOptions">            
                <Link to='/cart'><button>Ir al Carrito</button></Link>
                <Link to="/"><button>Seguir Comprando</button></Link>  
                </div>
            :
            <ItemCount inicio={1} stock={item.stock} onAdd={onAdd} />
 
        }
        </div>
    )
};

export default ItemDetail;


