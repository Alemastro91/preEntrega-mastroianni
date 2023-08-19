import React, { useState } from "react"
import "./ItemList.css"
import Item from '../Item/Item'

function ItemList ({productos}) {

    const renderItem = () => {
    return productos.map((item) => {
      return(
        <Item key={item.id} item={item} />
      )
    })
  }

  return (
    <div className="itemlist-box">
      {renderItem()}
    </div> 
  )
}

export default ItemList;