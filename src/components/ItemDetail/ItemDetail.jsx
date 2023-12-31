import React, { useContext, useState } from 'react';
import "./ItemDetail.css";
import ItemCount from '../ItemCoutn/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';


const ItemDetail = ({producto}) => {
  const [cantidadAgregada, setCantidadAgregada] = useState("")
  const {agregarItem} = useContext(CartContext)

  const onAdd = (cantidad) => {
      setCantidadAgregada(cantidad)
      agregarItem(producto, cantidad)
    }
  
  return (
    <div className='detail-box'>
      
      <img className='img-prod' src={producto.imagen} alt={producto.name} />

        <div className='prod-detail'>

          <h2 className='prod-tittle'>Producto: {producto.name}</h2>
          {producto.almacenamiento? <h3>Almacenamiento:{producto.almacenamiento}</h3> : <> </>}
          {producto.color? <h3>Almacenamiento:{producto.color}</h3> : <> </>}
          <h3>Estado: {producto.estado}</h3>
          <h4>Info: {producto.info}</h4>
          <h3>Precio: USD ${producto.precio}</h3>      
          {cantidadAgregada === "" ? <ItemCount valorinicial={0} stock={11} onAdd={onAdd}/>
          : <div className='buy-menu'>
            <Link to="/cart" className="gocart-button">Ir al Carrito</Link> 
            <Link to="/All" className='go-tobuy1'> Comprar Más </Link> 
          </div>} 
          
        </div>
      
      </div>

    
  )
}

export default ItemDetail;