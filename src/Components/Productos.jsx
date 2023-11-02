import React from "react";
import Producto from "./Producto";
import useProductos from "./hooks/useProductos";


export default function Productos({producto, agregarAFavoritos, eliminarDeFavoritos}) {
  
 const  {productos} = useProductos();

  return (
    <div className="productos">
    {
       productos.length > 0 ? productos.map(producto => <Producto key = {producto.id} producto = {producto}/>)
      :
      <p> La lista está vacia</p>
    }
    </div>
  );
}

// agregarAFavoritos={agregarAFavoritos} eliminarDeFavoritos={eliminarDeFavoritos}
