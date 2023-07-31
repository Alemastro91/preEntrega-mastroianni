import { BsCart4 } from "react-icons/bs";

const CartWidget = (props) => {
    return (
        <div className="cart">
           
            <BsCart4 className= "carrito-logo"/>
             
            <span className="conta">{props.contador}</span>
            
        </div>
    )
}

export default CartWidget