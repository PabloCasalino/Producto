import Producto from "./Producto";
import useProductos from "./hooks/useProductos";


export default function Productos({productos, agregarAFavoritos, eliminarDeFavoritos}) {
  

  return (
    <div className="productos">
    {
       productos.length > 0 ? productos.map(producto => <Producto key = {producto.id} producto = {producto} agregarAFavoritos={agregarAFavoritos} eliminarDeFavoritos={eliminarDeFavoritos}/>)
      :
      <p> La lista está vacia</p>
    }
    </div>
  );
}

// 
