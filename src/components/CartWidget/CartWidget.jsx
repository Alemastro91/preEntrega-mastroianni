import { useContext } from "react";
import { BsCart4 } from "react-icons/bs";
import { CartContext } from "../../context/cartContext";

const CartWidget = () => {

    const {cantidadCarrito} = useContext(CartContext)

    return (
        <div className="cart">
           
            <BsCart4 className= "carrito-logo"/>
             
            {cantidadCarrito() > 0 && <span className="conta">{cantidadCarrito()}</span>}
            
        </div>
    )
}

export default CartWidget