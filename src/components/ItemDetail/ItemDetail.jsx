import React from 'react';
import "./ItemDetail.css"

const ItemDetail = ({producto}) => {
  return (
    <div className='detail-box'>
      
      <img className='img-prod' src={producto.imagen} alt={producto.name} />

      <div className='prod-detail'>

        <h2 className='prod-tittle'>Producto: {producto.name}</h2>
        <h3>Almacenamiento: {producto.almacenamiento}</h3>
        <h3>Color: {producto.color}</h3>
        <h3>Estado: {producto.estado}</h3>
        <h3>Precio: USD ${producto.precio}</h3>      

      </div>      

      

    </div>
  )
}

export default ItemDetail;