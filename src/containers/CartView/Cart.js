import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import './Cart.css'


const Cart = () => {

    const { carrito, totalPrice, removeItem, clearCart } = useCartContext();


    return (
        <div class="CartViewContainer">
            {carrito.map( producto =>
                <div key={producto.id} class="CartView">
                <h3>{producto.name}</h3>    
                <div class="CartViewDetails">    
                    <div>
                        <img alt={producto.description} src={producto.image} sx={{width: 100}}></img>
                    </div>
                    <div>
                        <h5>Cantidad: {producto.quantity}</h5>
                        <h5>Precio: $ {(producto.price * producto.quantity)}</h5>
                    </div>
                </div>    
                    <button onClick={()=> {removeItem(producto.id)}}>Eliminar</button>
                </div>
            )}
            {carrito.length === 0 ?
                <div class="CarritoVacio">
                <div>    
                    <h3>OOPS! Tu carrito está vacío!</h3>
                    <h3>Para volver al inicio hacé click <Link to="/" class="link">acá</Link></h3>
                </div>
                </div>
                :
                <>
                <p>__________________________________</p>
                <h4>Total: ${totalPrice()}</h4>
                <button onClick={clearCart}>Vaciar carrito</button>  
                <Link to='/checkout'><button>Finalizar Compra</button></Link>
                </>
            }
        </div>
    )
}

export default Cart;