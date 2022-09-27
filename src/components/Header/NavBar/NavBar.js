import "./NavBar.css"
import { productos } from "../../../assets/productos"
import { Link, NavLink } from "react-router-dom";

const NavBar = ({categorias}) =>{
    return (
        <>
            <nav>
                <Link to="/categoria/tops">Tops</Link>
                <Link to="/categoria/bombis">Bombis</Link>
                <Link to="/categoria/corpis">Corpiños</Link>
                <Link to="/categoria/medias">Medias</Link>
            </nav>
        </>
    );
};

export default NavBar;