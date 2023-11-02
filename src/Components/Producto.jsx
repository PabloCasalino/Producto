import React from 'react'
import { Link } from 'react-router-dom'


export default function Producto({producto}) {
  return (
    <div className='producto'>
      <Link to = {'/'}><img src = {Producto.image} alt="imagen del producto" /></Link> 
      <div className='info'>
        <p>{Producto.title}</p>
        <mark>${Producto.price}</mark>
      </div>
      {/* {favorito ?
    <img className='Fav-icon' src= {Fav-icon} alt = 'favorito' onClick={handleClick} /> 
    :
    <img className='NoFav-icon' src= {NoFav-icon} alt = 'favorito' onClick={handleClick} />
    } */}
    </div>
  )
}
