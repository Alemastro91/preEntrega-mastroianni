import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";


function ItemListContainer (props)  {

  const [productos, setProductos] = useState([]);
  const {categoryId} = useParams()  
  
  useEffect(() => {
    fetch("https://64ac87ab9edb4181202f9bd9.mockapi.io/dbiPhone")
    .then((response) => response.json())
    .then((response) =>{
      if (categoryId){
        setProductos(response.filter((item) => item.estado === categoryId))
      }else{
        setProductos(response)
      }
    })
    .catch((error) => {
      console.log("error:", error)
    })
  },[categoryId])

return (
    <div className="itemlist-box">

      <ItemList productos={productos} /> 

      

    </div>
  )
}

export default ItemListContainer;