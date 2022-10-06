import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useCartContext } from "../../../context/CartContext";
import { Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';

const CartWidget = () =>{

    const { totalQuantity } = useCartContext();

    return (
        <NavLink to="/cart">
            <ShoppingCartIcon/>
            <Typography>{totalQuantity()}</Typography>      
        </NavLink>
    );
};

export default CartWidget;