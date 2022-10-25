import {Link} from "react-router-dom";
import "./Item.css";


const Item = ({productos}) => {
    return(
        <div class="card">
        <h4>{productos.name}</h4>
        <img src={productos.image} alt={productos.description} height="150px" />
        <Link to={`/item/${productos.id}`}><button>Ver Detalle</button></Link>
        </div>
    )
};

export default Item;