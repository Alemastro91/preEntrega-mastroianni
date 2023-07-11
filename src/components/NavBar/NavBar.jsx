import CartWidget from "../CartWidget";
import "./NavBar.css"

function NavBar () {
    return (
        <div>
            <nav className="barra-menu">
                <a href="index.html">Home</a>
                <a href="prductos.html">Productos</a>
                <a href="aboutUs.html">Sobre Nosotros</a>
                <CartWidget contador="1" />                
            </nav>
        </div>
    )
}

export default NavBar;