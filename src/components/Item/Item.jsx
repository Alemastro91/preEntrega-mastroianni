import { Link } from "react-router-dom";
import ItemCount from "../ItemCoutn/ItemCount";
import "./Item.css";

function Item ({item}) {
  return (
        <div className="product-box">
            <h1 className="name-box"> {item.name} </h1>
            <img className="img-box" src={item.imagen} alt={item.name} />
            <p> {item.estado} </p>
            <p className="precio-box">${item.precio}</p>
            <Link to={`/item/${item.id}`} className="detail-boton">Ver Mas</Link>

            <ItemCount valorinicial={0} stock={11} />

        </div>
  )
}

export default Item;