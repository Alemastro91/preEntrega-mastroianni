import CartWidget from "../CartWidget/CartWidget";
import CategorieBar from "../Categories/CategoriesBar";
import "./NavBar.css"
import { Link } from "react-router-dom";


function NavBar (props) {

    const categorias = [ 
        {
            id:"03",
            name:"Todos los Producto",
            path:"/All"
        },
        {
            id:"01",
            name:"Nuevos",
            path:"/category/Nuevo"
        },
        {
            id:"02",
            name:"Usados",
            path:"/category/Usado"
        },
        {
            id:"04",
            name:"Accesorios",
            path:"/category/Accesorios"
        }
    ];

    
    return (
        <div className="estilo-bar">
            <nav className="barra-menu">
                <Link to="/"><img className="logo-app" src="../img/liteSotoreLogo2.png" alt="logo-app" /></Link>
                <Link to="/">Home</Link>
                
                <ul className="categ-byprops"> 
                    {categorias.map((cat)=> {
                        return <li key={cat.id} >
                            <Link to={cat.path}> {cat.name} </Link>
                        </li>
                    })}
                </ul>

                <Link to="/cart"> <CartWidget/> </Link>                
            </nav> 

            <CategorieBar />  
            
        </div>
    )
}

export default NavBar;