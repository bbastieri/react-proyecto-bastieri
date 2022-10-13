import { useCartContext } from "../../context/CartContext";
import { Card, CardMedia, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Cart = () => {

    const { carrito, totalPrice, removeItem, clearCart } = useCartContext();

    const datosUsuario = {
        nombre: "Natalia",
        apellido: "Natalia",
        email: "n.natalia@hotmail.com"
    };

    const finalizarCompra = ()=>{
        const salesColl = collection(db, "sales");
        addDoc(salesColl, {
            datosUsuario,
            items: carrito,
            date: serverTimestamp(),
            totalPrice,    
        })
        console.log(totalPrice)
        .then(result=>{
            console.log(result.id);
            clearCart();
        })
    }

    return (
        <div>
            {carrito.map( producto =>
                <Card key={producto.id}>
                    <CardMedia component="img" alt={producto.title} image={producto.image} sx={{width: 100}}></CardMedia>
                    <Typography>{producto.name}</Typography>
                    <Typography>Cantidad: {producto.quantity}</Typography>
                    <Typography>Precio: $ {(producto.price * producto.quantity)}</Typography>
                    <Button onClick={()=> {removeItem(producto.id)}}>Eliminar</Button>
                </Card>
            )}
            {carrito.length === 0 ?
                (<>
                <Typography>Tu carrito está vacío :/</Typography>
                <Typography>Para volver al inicio hacé click <Link to="/">acá</Link></Typography>
                </>)
                :
                (<>
                <Typography>Total: ${totalPrice()}</Typography>
                <Button onClick={clearCart}>Vaciar carrito</Button>  
                <Button onClick={finalizarCompra}>Finalizar Compra</Button>
                </>)
            }
        </div>
    )
}

export default Cart;