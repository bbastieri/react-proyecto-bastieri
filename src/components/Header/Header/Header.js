import NavBar from "../NavBar/NavBar";
import logo1 from "../../../assets/images/logo1.png";
import CartWidget from "../CartWidget/CartWidget";
import "./Header.css"

const Header = () =>{
    return(
        <>
        <header>
        <img className="logo" src={logo1} alt="logo marca"/>
        <h1>CALYPSO LENCERIA MAGIKA</h1>
        <NavBar />
        <CartWidget/>
        </header>
        </>
    );
};

export default Header;