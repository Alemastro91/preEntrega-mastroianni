import "./ItemListContainer.css"


function ItemListContainer (props)  {

 const renderItem = () => {
    return props.items.map((item) =>{
      return(
        <div key={item.id} >

          <h1 className="name-box">{item.name}</h1>
          <img className="img-box" src={item.imagen} alt={item.name} />
          <p>{item.estado}</p>
          <p className="precio-box">${item.precio}</p>
          <button className="fav-boton">Agregar a Favoritos</button>

        </div>
      )
    })
  }

  return (
    <div className="itemlist-box">

    {renderItem()}

    </div>
  )
}

export default ItemListContainer;