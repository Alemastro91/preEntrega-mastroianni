import { BsCart4 } from "react-icons/Bs";
import { preprocessCSS } from "vite";

const CartWidget = (props) => {
    return (
        <div>
        <BsCart4 className = "carrito-logo" />
        <p>{props.contador}</p>
        </div>
    )
}

export default CartWidget