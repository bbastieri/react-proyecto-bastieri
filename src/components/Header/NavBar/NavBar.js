import "./NavBar.css"
import {Link} from "react-router-dom";

const NavBar = () =>{
    return (
        <>
            <nav>
                <div class="botonesCategoria">
                <Link to="/categoria/Bombis">Bombis</Link>
                <Link to="/categoria/Corpis">Corpiños</Link>
                <Link to="/categoria/Packs">Packs</Link>
                </div>
            </nav>
        </>
    );
};

export default NavBar;