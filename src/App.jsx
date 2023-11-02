import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Productos from "./Components/Productos";
import useProductos from './Components/hooks/useProductos';

function App() {

  const {productos, favoritos, agregarAFavoritos, eliminarDeFavoritos} = useProductos();
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Productos productos = {productos} eliminarDeFavoritos={eliminarDeFavoritos} agregarAFavoritos={agregarAFavoritos}/>} />
        <Route path="/favoritos" element={<Productos productos = {favoritos} eliminarDeFavoritos={eliminarDeFavoritos} agregarAFavoritos={agregarAFavoritos}/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
