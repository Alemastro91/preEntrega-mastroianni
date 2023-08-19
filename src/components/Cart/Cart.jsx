import React, {useContext} from 'react'
import "./Cart.css"
import { CartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'
import CartItem from '../CartItem/CartItem'

const Cart = () => {

    const {cart, clear, total} = useContext(CartContext)

  return (
    <div className='cart-box'>
        {cart.length 
        ? <div>
          {cart.map((item) => <CartItem key={item.id} item={item}/>)}
          <p>Total a Pagar: ${total()}</p>
          <div>
              <button onClick={clear}>Vaciar Carrito</button>
              <Link to="/checkout">Terminar la compra</Link >
            </div>
        </div>

        : <div>
            <h2 className='empty-mssg'>No hay productos, agrega alguno al carrito</h2>
            <Link to="/" className='go-tobuy' >Ir a Comprar</Link>
            </div>}
            
    </div>
  )
}

export default Cart 