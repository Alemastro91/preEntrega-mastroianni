import CartWidget from "../CartWidget";
import CategorieBar from "../Categories/CategoriesBar";
import "./NavBar.css"

function NavBar () {
    return (
        <div className="estilo-bar">
            <nav className="barra-menu">
                <a href="index.html"><img className="logo-app" src="../img/liteSotoreLogo2.png" alt="logo-app" /></a>
                <a href="index.html">Home</a>
                <a href="prductos.html">Productos</a>
                <a href="aboutUs.html">Sobre Nosotros</a>
                <CartWidget contador="1" />                
            </nav> 

            <CategorieBar />  
            
        </div>
    )
}

export default NavBar;