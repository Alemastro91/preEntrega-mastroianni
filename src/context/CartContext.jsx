import { createContext, useState } from "react";

export const CartContext = createContext()

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([])
    console.log(cart)
    const agregarItem = (item, cantidad) => {
        if(isInCart(item.id)){
            setCart(cart.map((producto) => {
                if(producto.id === item.id){
                    return {...producto, cantidad: producto.cantidad + cantidad}
                }else{
                    return producto
                }
            }))
        }else{
            setCart([...cart, {...item, cantidad}])
        }
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some((item) => item.id === id)
    }

    const borrarItem = (id) => {
        setCart(cart.filter((item) => item.id !== id))
    }

    const cantidadCarrito = () => {
        return cart.reduce((accumulador, item) => accumulador + item.cantidad, 0)
    }

    const total = () => {
        return cart.reduce((accumulador, item) => accumulador + item.cantidad * item.precio, 0)
    }

    return (
        <CartContext.Provider value={{cart, agregarItem, clear, borrarItem, cantidadCarrito, total}}>
                {children}
        </CartContext.Provider>
    )
}