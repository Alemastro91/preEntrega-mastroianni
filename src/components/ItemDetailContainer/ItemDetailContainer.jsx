import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemDetailContainer.css"

const ItemDetailContainer = () => {

const [producto, setProducto] = useState({});    
const {id} = useParams()

useEffect(() => {
    fetch(`https://64ac87ab9edb4181202f9bd9.mockapi.io/dbiPhone/${id}`)
    .then((response) => response.json())
    .then((response) =>{
    setProducto(response)
    })
    .catch((error) => {
    console.log("error:", error)
    })
},[id]);

return (

    <div>

        <ItemDetail producto={producto} />

    </div>

)
}

export default ItemDetailContainer;