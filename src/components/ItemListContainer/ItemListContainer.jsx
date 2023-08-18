import "./ItemListContainer.css"
import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";



function ItemListContainer (props)  {

  const [productos, setProductos] = useState([]);
  const {categoryId} = useParams()  
  
  // useEffect(() => {
  //   fetch("https://64ac87ab9edb4181202f9bd9.mockapi.io/dbiPhone")
  //   .then((response) => response.json())
  //   .then((response) =>{
  //     if (categoryId){
  //       setProductos(response.filter((item) => item.estado === categoryId))
  //     }else{
  //       setProductos(response)
  //     }
  //   })
  //   .catch((error) => {
  //     console.log("error:", error)
  //   })
  // },[categoryId])

  useEffect(() => {
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

      <ItemList productos={productos} /> 

      

    </div>
  )
}

export default ItemListContainer;