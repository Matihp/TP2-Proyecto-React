import React from 'react';
import './Navbar.css';

const Navbar = ({ toggleMenu }) => {
  return (
    <nav className="navbar-superior">
      <button className="boton-hamburguesa" onClick={toggleMenu}>
        ☰
      </button>
      <div className="contenedor-usuario">

      </div>
    </nav>
  );
};

export default Navbar;
