import React from 'react'
import "./CategoriesBar.css" 

const CategorieBar = () => {
  return (
    <div className='subNav'>
       
      <div className='left-side'> 
        <a href="categorias.html">Categorias</a>
        <a href="favoritos.htlm">Fav`s</a>
      </div>

      <div className='right-side'>
        <a href="login">Log-In</a>
      </div>

    </div>
  )
}

export default CategorieBar