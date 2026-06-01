import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/Sidebar';
import Navbar from '../Navbar/Navbar';
import './Layout.css';

const Layout = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const toggleMenu = () => {
    setMenuAbierto(!menuAbierto);
  };

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  return (
    <div className="contenedor-layout">
      <Sidebar abierto={menuAbierto} cerrar={cerrarMenu} />
      {menuAbierto && <div className="fondo-oscuro" onClick={cerrarMenu}></div>}
      <div className="contenedor-principal">
        <Navbar toggleMenu={toggleMenu} />
        <main className="contenido-principal">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
