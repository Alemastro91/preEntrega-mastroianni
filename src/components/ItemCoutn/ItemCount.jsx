import React, { useState } from 'react'
import "./ItemCount.css"

const ItemCount = ({valorinicial, stock}) => {
  const [contador, setContador] = useState(valorinicial)

  const sumar = () => {
    if(contador < stock){
    setContador( contador + 1)
    }
  }

  const restar = () => {
    if(contador > 0){
      setContador( contador - 1)
    } 
  }

  return (
    <div className='count-box'>

      <button className='plus-button' onClick={restar}> - </button>
      <span>{contador}</span>
      <button className='less-button' onClick={sumar}> + </button>

    </div>
  )
}

export default ItemCount;