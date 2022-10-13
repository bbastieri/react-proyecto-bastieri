import { Fragment } from "react";
import { useState, useContext } from "react";
import { collection, addDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore"
import { Link } from "react-router-dom"
import { CartContextProvider } from "../../context/CartContext";
import { db } from "../../firebase/firebase"

const Form = () =>{

    const { carrito, totalPrice} = useContext(CartContextProvider);
    
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
        <h1>Form</h1>
        <form >
           <div className="container-form">
           <div>
            <input type="text" placeholder="Nombre" className="form" name="Name" onChange={inputChange}></input>
           </div>
           <div>
            <input type="text" placeholder="Apellido" className="form" name="Surname" onChange={inputChange}></input>
           </div>
           <div>
            <input type="Text" placeholder="Email" className="form" name="Name-Card" onChange={inputChange}></input>
           </div>
           </div>
        </form>
        <div className="container-button">
           <button type="Submit" className="button" onClick={finalizarCompra}>Submit</button>
           <Link className="Link-Home"to="/">Cancel</Link>
           </div>
    </Fragment>
          
</div>
)   

}

export default Form