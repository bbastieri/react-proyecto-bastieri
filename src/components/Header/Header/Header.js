import NavBar from "../NavBar/NavBar";
import logo1 from "../../../assets/images/logo1.png";
import CartWidget from "../CartWidget/CartWidget";
import "./Header.css"
import { Link }  from "react-router-dom"

const Header = () =>{
    return(
        <>
        <header>
        <Link to="/">
        <img className="logo" src={logo1} alt="logo marca"/>
        </Link>   
        <Link to="/">
        <h1>CALYPSO LENCERIA MAGIKA</h1>
        </Link> 
        <NavBar />
        <Link to="/cart">
        <CartWidget/>
        </Link>
        </header>
        </>
    );
};

export default Header;