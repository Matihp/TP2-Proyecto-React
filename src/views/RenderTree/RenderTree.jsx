import React from 'react';
import './RenderTree.css';

const RenderTree = () => {
  return (
    <div className="contenedor-arbol">
      <h2 className="titulo-arbol">Árbol de Renderizado de la Aplicación</h2>
      <p className="descripcion-arbol">
        Esta es la representación esquemática de la estructura de componentes de nuestro proyecto React.
      </p>     
      <div className="diagrama-arbol">
        <ul className="lista-raiz">
          <li>
            <span className="nodo-raiz">App.jsx (Raíz)</span>
            <ul>
              <li>
                <span className="nodo-layout">Layout.jsx (Contenedor Principal)</span>
                <ul>
                  <li><span className="nodo-hijo">Sidebar.jsx (Navegación Lateral)</span></li>
                  <li><span className="nodo-hijo">Navbar.jsx (Barra Superior)</span></li>
                  <li>
                    <span className="nodo-vistas">Vistas Dinámicas (Rutas en el contenido central)</span>
                    <ul>
                      <li><span className="nodo-vista">HomeDashboard.jsx</span></li>
                      <li><span className="nodo-vista">MatiasProfile.jsx</span></li>
                      <li><span className="nodo-vista">MariaProfile.jsx</span></li>
                      <li><span className="nodo-vista">DataExplorer.jsx</span></li>
                      <li><span className="nodo-vista">ApiIntegration.jsx</span></li>
                      <li><span className="nodo-vista">Gallery.jsx</span></li>
                      <li><span className="nodo-vista">Bitacora.jsx</span></li>
                      <li><span className="nodo-vista">RenderTree.jsx (¡Estás aquí!)</span></li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RenderTree;
