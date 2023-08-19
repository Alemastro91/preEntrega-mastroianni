import React, {useContext} from 'react'
import { CartContext } from '../../context/cartContext'
import "./CartItem.css"


const CartItem = ({item}) => {

    const {borrarItem} = useContext(CartContext)

  return (
    <div className='cartItem-box'>
        <img src={item.imagen} alt={item.name} className='prod-mini'/>
        <h2>{item.name}</h2>
        <p>Cantidad:</p>
        <p>{item.cantidad}</p>
        <p>{item.precio} $Usd</p>
        <p>Sub total : $ {item.cantidad * item.precio} $Usd</p>       
        <button className='delet-item' onClick={()=>borrarItem(item.id)} >X</button>
    </div>
  )
}

export default CartItem