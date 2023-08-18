import React, { useEffect } from 'react'
import "./LogIn.css"

const LogIn = () => {

    const handleOnClick = (event) => { 
        console.log("Eventoo Clickeado", event)
    }

    useEffect(() => {
      const handleOnResize = event => {
        console.log("event:", event)
        console.log("La pantalla cambio de tamaño")
      }

      window.addEventListener("resize", handleOnResize);

      return () => {
        window.removeEventListener("resize", handleOnResize);
      }

    }, [])



  return (
    <div className='log-box'>

        <input className='input-box' type="text" placeholder='Usuario' />
        <input className='input-box' type="text" placeholder='Contraseña' />
        <button onClick={handleOnClick} className='log-button'>Ingresar</button>

    </div>
  )
}

export default LogIn