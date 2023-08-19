import { addDoc, collection,serverTimestamp } from 'firebase/firestore';
import React, { useState, useContext } from 'react';
import { CartContext } from '../../context/cartContext';
import "./CheckOut.css"
import { Link } from 'react-router-dom';
import { db } from '../../service/firebase';


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
        ? <div className='id-compra'>
        <h2 className='gracias-box'>¡Gracias! Tu orden de compra se genero correctamente.</h2>
        <h5 className='order-id'>Su numero de oreden es: "{orderID}"</h5>
        <Link className='go-home' to="/"> Volver a Home </Link>
        </div> 
        :
        <div className='form-container'>
            <h2>Terminar Compra</h2>
            <h5>Por favor llenar con su datos</h5>
                <form className='form-box' onSubmit={terminarCompra}>
                    <div className='campos-box'>
                        <label>Nombre Completo :</label>
                        <input className='datos-box' onChange={datosComprador} type="text" placeholder="Nombre y Apellido" name="name" required/>
                    </div>
                    <div className='campos-box' >
                        <label>Numero de telefono :</label>
                        <input className='datos-box' onChange={datosComprador} type="number" placeholder="11xxxxxxxx" name="phone" required/>
                    </div>
                    <div className='campos-box' >
                        <label>Direccion de e-mail :</label>
                        <input className='datos-box' onChange={datosComprador} type="email" placeholder="abcdefg@hijklm.com" name="mail"/>
                    </div>
                    {/* Reconfirmacion de e-mail */}
                    <div className='campos-box' >
                        <label>Repita su e-mail :</label>
                        <input className='datos-box' onChange={((e) => setValidarMail(e.target.value))} type="email" placeholder="abcdefg@hijklm.com" name="mail"/>
                    </div>

                    <button className='send-btn' type='submit' disabled={validarMail !== user.mail}>Realizar Compra</button>

            </form>
            </div>
    }
    </div>
)
}
export default CheckOut