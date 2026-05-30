import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import './Layout.css';

const Layout = () => {
  return (
    <div className="contenedor-layout">
      <Sidebar />
      <div className="contenedor-principal">
        <Navbar />
        <main className="contenido-principal">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
