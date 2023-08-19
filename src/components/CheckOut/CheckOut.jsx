import { addDoc, collection,serverTimestamp } from 'firebase/firestore'
import React, { useState, useContext } from 'react'
import { CartContext } from '../../context/cartContext'
import { db } from '../service/firebase'

const CheckOut = () => {

    const [user, setUser] = useState({})
    const [validarMail, setValidarMail] = useState("")
    const [orderID, setOrderID] = useState ("")
    const {cart, total, clear} = useContext(CartContext)

    const datosComprador = (e) =>{
        setUser({
            ...user,
            [e.target.name]:e.target.value
        })
    }

    const terminarCompra = (e) => {
        e.preventDefault()
        if(!user.name && !user.phone){
            alert("Todos los campos deben ser completados")
        }else{
            let order = {
                user,
                item:cart,
                total:total(),
                fecha:serverTimestamp()
            }

            const ventas = collection(db, "orders")
            addDoc(ventas, order)
            .then((response) => {
                setOrderID(response.id)
                clear()
            })
            .catch((error) => console.log(error))
            }
        }
    
return (
    <div>
        {orderID !== ""
        ? <div>
        <h2>Gracias, tu orden de compra se genero correctamente</h2>
        <h5>Su numero de oreden es: {orderID}</h5>
        </div> 
        :
        <div>
            <h2>Terminar Compra</h2>
            <h5>Por favor llenar con su datos</h5>
                <form onSubmit={terminarCompra}>
                    <div>
                        <label>Nombre Completo</label>
                        <input onChange={datosComprador} type="text" placeholder="Nombre y Apellido" name="name" required/>
                    </div>
                    <div>
                        <label>Numero de telefono</label>
                        <input onChange={datosComprador} type="number" placeholder="11xxxxxxxx" name="phone" required/>
                    </div>
                    <div>
                        <label>Direccion de e-mail</label>
                        <input onChange={datosComprador} type="email" placeholder="abcdefg@hijklm.com" name="mail"/>
                    </div>
                    {/* Reconfirmacion de e-mail */}
                    <div>
                        <label>Repita su e-mail</label>
                        <input onChange={((e) => setValidarMail(e.target.value))} type="email" placeholder="abcdefg@hijklm.com" name="mail"/>
                    </div>

                    <button type='submit' disabled={validarMail !== user.mail}>Generar Orden</button>

            </form>
            </div>
    }
    </div>
)
}
export default CheckOut