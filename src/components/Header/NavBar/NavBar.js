import "./NavBar.css"
import {Link} from "react-router-dom";

const NavBar = () =>{
    return (
        <>
            <nav>
                <Link to="/categoria/Bombis">Bombis</Link>
                <Link to="/categoria/Corpis">Corpiños</Link>
            </nav>
        </>
    );
};

export default NavBar;