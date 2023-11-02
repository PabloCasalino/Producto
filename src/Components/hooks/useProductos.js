
import { useState, useEffect } from 'react';
import { obtenerProducto } from '../servicios/productoService';

export default function useProductos() {

    const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProducto().then((data) => {
      setProductos(data);
    });
  }, []);
  return (
   {productos}
  )
}
