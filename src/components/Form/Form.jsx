import { useState } from "react";
import { collection, addDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext";
import { db } from "../../firebase/firebase"
import './Form.css'


const Form = () =>{

    const { carrito, totalPrice, clearCart } = useCartContext();
    const [ userData, setUserData ] = useState({});
    const [salesId, setSalesId] = useState ();

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
        .then((result)=>{
            setSalesId(result.id);
            carrito.forEach(products => {
                updateStock(products);
            });
            setTimeout(()=>{
                clearCart();    
            },1000)
        })
    }

    const updateStock = (products) => {
        const updStk = doc(db, "products", products.id)
        updateDoc(updStk, {stock:(products.stock - products.quantity)})
    }


return (
<div>
    <div class="ContainerForm">
        <h3>Antes de terminar, por favor ingresá tus datos</h3>
        <form onSubmit={finalizarCompra} >
           <div className="container-form">
           <div> 
            <input type="text" placeholder="Nombre"  name="Nombre" onChange={inputChange} required={true}></input>
           </div> 
           <div>
            <input type="text" placeholder="Apellido"  name="Apellido" onChange={inputChange} required={true}></input>
           </div>
           <div>
            <input type="text" placeholder="Email"  name="Email" onChange={inputChange} required={true}></input>
           </div>
           </div>
        </form>
        <div>
           <button type="Submit">Enviar</button>
           <Link className="Link-Home"to="/"><button>Cancelar</button></Link>
        </div>
        <p>El código de verificación de tu compra es:</p>
        <h3 class="salesId"> {salesId} </h3>
    </div>
</div>
)   

}

export default Form