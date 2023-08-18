import {
  BrowserRouter,
  Routes,
  Route} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Home from "./components/Home/Home";
import LogIn from "./components/Log-In/LogIn";
import { CartProvider } from "./context/cartContext";


//Lite Store
function App() {
  
  return (
    <div className = "App">   
      
      {/* <CartProvider> */}
        <BrowserRouter>
              <NavBar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Log,In" element={<LogIn/>} />
              <Route path="/All" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
            </Routes>      
          </BrowserRouter>
      {/* </CartProvider> */}
      
    </div>
  )
}

export default App
