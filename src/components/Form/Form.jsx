import { useState } from "react";
import { collection, addDoc, serverTimestamp, updateDoc, doc } from "firebase/firestore"
import { Link } from "react-router-dom"
import { useCartContext } from "../../context/CartContext";
import { db } from "../../firebase/firebase"
import './Form.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
        if (userData.Nombre !== "" && userData.Apellido !== "" && userData.Email === userData.VerifyEmail) {
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

            toast('Felicitaciones! Tu compra se realizó con éxito!', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                    });
            })

            setTimeout(()=>{
                clearCart();    
            },1000)
        } else {
            toast('Oops! Por favor verificá tus datos para continuar', {
                    position: "bottom-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                })
        }    
        
    }

    const updateStock = (products) => {
        const updStk = doc(db, "products", products.id)
        updateDoc(updStk, {stock:(products.stock - products.quantity)})
    }


return (
<div>
    <div class="ContainerForm">
        <h3>Antes de terminar, por favor ingresá tus datos</h3>
        <form>
           <div className="container-form">
           <div> 
            <input type="text" placeholder="Nombre"  name="Nombre" onChange={inputChange}></input>
           </div> 
           <div>
            <input type="text" placeholder="Apellido"  name="Apellido" onChange={inputChange}></input>
           </div>
           <div>
            <input type="text" placeholder="Email"  name="Email" onChange={inputChange}></input>
           </div>
           <div>
            <input type="text" placeholder="Verificá tu email"  name="VerifyEmail" onChange={inputChange}></input>
           </div>
           </div>
        </form>
        <div>
           <button type="Submit" onClick={finalizarCompra}>Enviar</button>
           <Link className="Link-Home"to="/"><button>Cancelar</button></Link>
        </div>
        <div>
            <p>El código de verificación de tu compra es:</p>
            <h3 class="salesId"> {salesId} </h3>
            <p>Guardalo para poder coordinar la entrega!</p>
        </div>
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
            theme="colored"
        />


    </div>
</div>
)   

}

export default Form