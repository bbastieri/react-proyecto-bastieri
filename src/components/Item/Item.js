import { Profiler } from "react";
import {productos} from "../../assets/productos"

const Item = ({productos}) => {
    return(
        <>
        <h4>{productos.name}</h4>
        <h4>{"$"+productos.price}</h4>
        </>
    )
};

export default Item;