import CartWidget from "../CartWidget";
import CategorieBar from "../Categories/CategoriesBar";
import "./NavBar.css"

function NavBar (props) {

    const onClickCategory = (item) => {
        props.onClick(item);
    }

    return (
        <div className="estilo-bar">
            <nav className="barra-menu">
                <a href="index.html"><img className="logo-app" src="../img/liteSotoreLogo2.png" alt="logo-app" /></a>
                <a href="index.html">Home</a>
                
                <ul className="categ-byprops">
                    {props.items.map((item, index) =>{
                        return (
                            <li 
                            key={index}
                            onClick={() => onClickCategory(item)}
                            >
                            {item}</li>
                        )
                    })}
                </ul>

                <CartWidget contador="1" />                
            </nav> 

            <CategorieBar />  
            
        </div>
    )
}

export default NavBar;