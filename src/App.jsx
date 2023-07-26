import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer" 
import { useEffect, useState } from "react";


//Lite Store
function App() {
  
  const categorias = ["Productos", "Nuevo", "Usado", "Fav`s"];
  const [originales, setOriginales] = useState([]);
  const [productos, setProductos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  
  useEffect(() => {
    fetch("https://64ac87ab9edb4181202f9bd9.mockapi.io/dbiPhone")
    .then((response) => response.json())
    .then((response) =>{
      //console.log("response.results", response.results)
      setProductos(response)
      setOriginales(response)
    })
    .catch((error) => {
      console.log("error:", error)
    })
  },[]);

  useEffect (() => {
      //console.log("Filtro por: ", selectedCategory)
      if(selectedCategory === "Productos"){
        setProductos(originales)
      } 
      else{
        const newData = originales.filter((producto) => {
        return producto.estado === selectedCategory
      })
      setProductos(newData)
    }
  }, [selectedCategory])


  return (
    <div className = "App">

      <NavBar items={categorias}
      onClick={setSelectedCategory}
      />

      <ItemListContainer items={productos} />


    </div>
  )
}

export default App