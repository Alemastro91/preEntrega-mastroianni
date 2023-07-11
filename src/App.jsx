import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer"

//Lite Store
function App() {
  return (
    <div className = "App">

      <NavBar />

      <ItemListContainer greeting="Bienvenido a Lite Store" />


    </div>
  )
}

export default App