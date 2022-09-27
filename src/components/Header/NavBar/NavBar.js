import "./NavBar.css"
import {Link} from "react-router-dom";

const NavBar = () =>{
    return (
        <>
            <nav>
                <Link to="/categoria/Bodys">Bodys</Link>
                <Link to="/categoria/Bombis">Bombis</Link>
                <Link to="/categoria/Corpis">Corpiños</Link>
                <Link to="/categoria/Medias">Medias</Link>
            </nav>
        </>
    );
};

export default NavBar;