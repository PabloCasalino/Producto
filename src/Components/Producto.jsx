import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FavImg from './img/corazon.png';
import NoFavImg from './img/corazonRojo.webp'


export default function Producto({producto, agregarAFavoritos, eliminarDeFavoritos}) {

  const[favorito,setFavorito] = useState(false);

  function handleClick(){
   
    if(favorito){
      eliminarDeFavoritos(producto)
      setFavorito(false)
    }else {
      agregarAFavoritos(producto)
      setFavorito(true)
    }
  }

  return (
    <div className='producto'>
      <Link to = {`/producto/${producto.id}`}><img src = {producto.image} alt="imagen del producto" /></Link> 
      <div className='info'>
        <p>{producto.title}</p>
        <mark>${producto.price}</mark>
      </div>
      {
      favorito ?
      <img className = 'favicon' src= {NoFavImg} onClick={handleClick} />
:
<img className = 'favicon' src= {FavImg} onClick={handleClick} />
}
    </div>
  )
}
