import React from 'react';
import './Sidebar.css';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ abierto, cerrar }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', name: 'Home', icon: '🏠' },
    { path: '/matias', name: 'Matias', icon: '👨‍💻' },
    { path: '/maria', name: 'Maria', icon: '👩‍💻' },
    { path: '/datos', name: 'Datos', icon: '📊' },
    { path: '/api', name: 'API', icon: '🌐' },
    { path: '/galeria', name: 'Galería', icon: '🖼️' },
    { path: '/bitacora', name: 'Bitácora', icon: '📓' },
    { path: '/arbol', name: 'Árbol UI', icon: '🌳' },
  ];

  return (
    <aside className={`sidebar ${abierto ? 'sidebar-abierto' : ''}`}>
      <div className="contenedor-logo">
        <div className="logo-icono">♾️</div>
        <h2 className="titulo-logo">Matrix<span className="resaltado-logo">Devs</span></h2>
      </div>

      <div className="contenedor-enlaces">
        <ul className="lista-enlaces">
          {navItems.map((item) => (
            <li className="item-enlace" key={item.path}>
              <Link
                to={item.path}
                className={`link-enlace ${location.pathname === item.path ? 'activo' : ''}`}
                onClick={cerrar}
              >
                <span className="icono-enlace">{item.icon}</span>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-footer">
        <div className="info-version">
          <p>MatrixDevs v1.0 - TP2 React</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
