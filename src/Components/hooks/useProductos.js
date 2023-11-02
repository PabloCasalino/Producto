
import { useState, useEffect } from 'react';
import { obtenerProducto } from '../servicios/productoService';

export default function useProductos() {

    const [productos, setProductos] = useState([]);
    const [favoritos, setfavoritos] = useState([])

    useEffect(() => {
        obtenerProducto().then(data => {
            setProductos(data);
        });
    }, []);

    function agregarAFavoritos(producto) {
        const newfavoritos = [...favoritos]
        newfavoritos.push(producto)
        setfavoritos(newfavoritos)
    }

    function eliminarDeFavoritos(producto) {
        const newfavoritos = favoritos.filter(e => e.id !== producto.id)
        setfavoritos(newfavoritos)

    }
    return (
        { productos, favoritos, agregarAFavoritos, eliminarDeFavoritos,  }
    )
}
