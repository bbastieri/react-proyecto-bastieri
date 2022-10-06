import { useCartContext } from "../../context/CartContext";
import { Card, CardMedia, Typography, Button } from "@mui/material"

const Cart = () => {

    const { carrito, totalPrice, removeItem, clearCart } = useCartContext();

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
                <Typography>Tu carrito está vacío</Typography>
                :
                <>
                <Typography>Total: ${totalPrice()}</Typography>
                <Button onClick={clearCart}>Vaciar carrito</Button>  
                </>  
            }
        </div>
    )
}

export default Cart;