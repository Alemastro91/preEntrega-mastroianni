import { Link } from "react-router-dom";
import "./Item.css";

function Item ({item}) {
  return (
        <div className="product-box">
            <h1 className="name-box"> {item.name} </h1>
            <img className="img-box" src={item.imagen} alt={item.name} />
            <p> {item.estado} </p>
            <p className="precio-box">${item.precio}</p>
            <Link to={`/item/${item.id}`} className="detail-boton">Ver Mas</Link>
        </div>
  )
}

export default Item;