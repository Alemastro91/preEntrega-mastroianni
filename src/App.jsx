import {
  BrowserRouter,
  Routes,
  Route} from "react-router-dom";

import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Home from "./components/Home/Home";
import { CartProvider } from "./context/cartContext";
import Cart from "./components/Cart/Cart";
import CheckOut from "./components/CheckOut/CheckOut";


//Lite Store
function App() {
  
  return (
    <div className = "App">   
      
      <CartProvider>
        <BrowserRouter>
              <NavBar/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/All" element={<ItemListContainer />} />
              <Route path="/category/:categoryId" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/cart" element={<Cart />} /> 
              <Route path="/checkout" element={<CheckOut/>} />
            </Routes>      
          </BrowserRouter>
      </CartProvider>
      
    </div>
  )
}

export default App
