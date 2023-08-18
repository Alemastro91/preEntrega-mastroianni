import React, { useContext, useState } from 'react';
import "./ItemDetail.css";
import ItemCount from '../ItemCoutn/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';


const ItemDetail = ({producto}) => {
  const [cantidadAgregada, setCantidadAgregada] = useState("")
  const context = useContext(CartContext)
  console.log(context)

  const onAdd = (cantidad) => {
  console.log(`Compraste ${cantidad} productos`)
    setCantidadAgregada(cantidad)
    
    
  }
  
  return (
    <div className='detail-box'>
      
      <img className='img-prod' src={producto.imagen} alt={producto.name} />

        <div className='prod-detail'>

          <h2 className='prod-tittle'>Producto: {producto.name}</h2>
          <h3>Almacenamiento: {producto.almacenamiento}</h3>
          <h3>Color: {producto.color}</h3>
          <h3>Estado: {producto.estado}</h3>
          <h3>Precio: USD ${producto.precio}</h3>      
          {cantidadAgregada === "" ? <ItemCount valorinicial={0} stock={11} onAdd={onAdd}/>
          :<Link to="/cart" className="gocart-button">Ir al Carrito</Link>}
          
        </div>
      
      </div>

    
  )
}

export default ItemDetail;