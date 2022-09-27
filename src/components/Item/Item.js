import { Button } from "@mui/material";
import {Link} from "react-router-dom";
import "./Item.css";


const Item = ({productos}) => {
    return(
        <>
        <h4>{productos.name}</h4>
        <img src={productos.image} height="150px" />
        <Link to={`/item/${productos.id}`}><Button>Ver Detalle</Button></Link>
        </>
    )
};

export default Item;