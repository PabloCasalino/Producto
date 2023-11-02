import React from "react";
import { useState, useEffect } from "react";
import { obtenerProducto } from "./servicios/productoService";
import Producto from "./Producto";

export default function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerProducto().then((data) => {
      setProductos(data);
    });
  }, []);

  return (
    <div>
      {productos.map((producto) => (
        <p>
          <Producto producto={producto} />
        </p>
      ))}
    </div>
  );
}
