import Header from "./Components/Header";
import Footer from "./Components/Footer";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import Productos from "./Components/Productos";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Productos/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
