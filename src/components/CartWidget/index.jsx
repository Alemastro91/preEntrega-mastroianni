import { BsCart4 } from "react-icons/Bs";

const CartWidget = (props) => {
    return (
        <div className="conta">
            <BsCart4 className = "carrito-logo"/>
            <span>{props.contador}</span>
        </div>
    )
}

export default CartWidget