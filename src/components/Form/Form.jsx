import { Fragment } from "react";
import { useState } from "react";
import { collection, addDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext";
import { db } from "../../firebase/firebase"
import { Typography, Button } from "@mui/material";


const Form = () =>{

    const { carrito, totalPrice } = useCartContext();
    
    const [ userData, setUserData ] = useState({
        Nombre: "",
        Apellido: "",
        Email: "",
    })

    const inputChange = (event) => {
        setUserData({
            ...userData, [event.target.name] : event.target.value
        })
    }

    const finalizarCompra = ()=>{
        const salesColl = collection(db, "sales");
        addDoc(salesColl, {
            comprador: userData,
            items: carrito,
            date: serverTimestamp(), 
            total: totalPrice() 
        })
        .then(()=>{
            carrito.forEach(products => {
                updateStock(products)
            })
        })
    }

    const updateStock = (products) => {
        const updStk = doc(db, "products", products.id)
        updateDoc(updStk, {stock:(products.stock - products.quantity)})
    }


return (
<div>
    <Fragment>
        <Typography>Antes de terminar, por favor ingresá tus datos</Typography>
        <form >
           <div className="container-form">
           <div>
            <input type="text" placeholder="Nombre"  name="Nombre" onChange={inputChange}></input>
           </div>
           <div>
            <input type="text" placeholder="Apellido"  name="Apellido" onChange={inputChange}></input>
           </div>
           <div>
            <input type="Text" placeholder="Email"  name="Email" onChange={inputChange}></input>
           </div>
           </div>
        </form>
        <div>
           <Button type="Submit" onClick={finalizarCompra}>Aceptar</Button>
           <Link className="Link-Home"to="/"><Button>Cancelar</Button></Link>
        </div>
    </Fragment>
          
</div>
)   

}

export default Form