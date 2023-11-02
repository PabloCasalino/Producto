import React from "react";
import Producto from "./Producto";
import useProductos from "./hooks/useProductos";


export default function Productos() {
  
 const  {productos} = useProductos();

  return (
    <div className="productos">
    {
      productos.map(producto => <Producto key = {producto.id} producto = {producto}/>)
    }
    </div>
  );
}
