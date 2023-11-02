import React from "react";
import { Link } from 'react-router-dom';
import Logo from './img/lobo.png'

export default function Header() {
  return (
    <header className = 'header'>
      <Link className = 'icon' to = {"/"}> < img src={Logo} alt = "Lobito" /></Link>
      <nav>
        <Link to = {'/'} > Productos</Link>
        <Link to = {'/'} > Favoritos</Link>
      </nav>

    </header>
  );
}
