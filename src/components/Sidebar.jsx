import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="contenedor-logo">
        <h2 className="titulo-logo">React<span className="resaltado-logo">Team</span></h2>
      </div>
      <ul className="lista-enlaces">
        <li className="item-enlace"><Link to="/" className="link-enlace">Home</Link></li>
        <li className="item-enlace"><Link to="/matias" className="link-enlace">Matias</Link></li>
        <li className="item-enlace"><Link to="/maria" className="link-enlace">Maria</Link></li>
        <li className="item-enlace"><Link to="/datos" className="link-enlace">Datos</Link></li>
        <li className="item-enlace"><Link to="/api" className="link-enlace">API</Link></li>
        <li className="item-enlace"><Link to="/galeria" className="link-enlace">Galeria</Link></li>
        <li className="item-enlace"><Link to="/bitacora" className="link-enlace">Bitacora</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
