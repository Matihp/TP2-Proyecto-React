import React from 'react';
import './HomeDashboard.css';

const HomeDashboard = () => {
  return (
    <main className="dashboard-principal">
      <h1 className="titulo-dashboard">Panel de Control</h1>
      <p className="subtitulo-dashboard">Accesos rápidos a los perfiles del equipo</p>
      
      <div className="grilla-tarjetas">

        <div className="tarjeta-perfil animacion-entrada-1">
          <div className="contenedor-avatar">
            <img src="https://ui-avatars.com/api/?name=Matias+Contreras&background=0D8ABC&color=fff&size=150" alt="Avatar Matias" className="imagen-avatar" />
          </div>
          <h2 className="nombre-tarjeta">Matias Contreras</h2>
          <p className="rol-tarjeta">Desarrollador Frontend</p>
          <button className="boton-acceso">Ver Perfil</button>
        </div>

        <div className="tarjeta-perfil animacion-entrada-2">
          <div className="contenedor-avatar">
            <img src="https://ui-avatars.com/api/?name=Maria+Lopez&background=E53E3E&color=fff&size=150" alt="Avatar Maria" className="imagen-avatar" />
          </div>
          <h2 className="nombre-tarjeta">Maria Lopez</h2>
          <p className="rol-tarjeta">Desarrolladora Frontend</p>
          <button className="boton-acceso">Ver Perfil</button>
        </div>
        
      </div>
    </main>
  );
};

export default HomeDashboard;
