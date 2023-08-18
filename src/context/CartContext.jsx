import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    
    const agregarItem = (item, cantidad) => {
        console.log(item, cantidad)
    }


    return (
        <CartContext.Provider value={{cart}}>
                {children}
        </CartContext.Provider>
    )
}