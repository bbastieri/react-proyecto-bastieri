import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from "../../../context/CartContext";
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import './CartWidget.css';

const CartWidget = () =>{

    const { totalQuantity } = useCartContext();

    return (
        <NavLink to="/cart">
            <div class="widget">
            <ShoppingCartIcon/>
            <Typography>{totalQuantity()}</Typography> 
            </div>     
        </NavLink>
    );
};

export default CartWidget;