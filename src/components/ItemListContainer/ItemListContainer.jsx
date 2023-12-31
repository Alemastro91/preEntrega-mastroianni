import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import Loader from "../Loader/Loader";
import { db } from "../../service/firebase";


function ItemListContainer (props)  {

  const [productos, setProductos] = useState([]);
  const {categoryId} = useParams()  
  const [loading , setLoading] = useState(true)
  
  useEffect(() => {

    setTimeout(() => {
      setLoading(false)
    }, 2000);
    
    setLoading(true)
    const coleccionDeProductos = categoryId ? query(collection(db, "iPhoneDB"), where("estado", "==", categoryId)): collection(db, "iPhoneDB") 
    getDocs(coleccionDeProductos) 
    .then ((response) => {
      const list = response.docs.map((productos) => {
        return {
          id: productos.id,
          ...productos.data()
        }
      })
      setProductos(list)
    })
    .catch((error) => console.log(error))
  }
  , [categoryId] )

return (
    <div className="itemlist-box">
      
      {loading ? <Loader /> : <ItemList productos={productos} /> }
      

    </div>
  )
}

export default ItemListContainer;