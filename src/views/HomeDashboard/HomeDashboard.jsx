import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HomeDashboard.css';

const HomeDashboard = () => {
  const navigate = useNavigate();

  return (
    <main className="dashboard-principal">
      <header className="cabecera-principal">
        <div className="contenido-cabecera">
          <span className="etiqueta-materia">DSWB - TP2 React</span>
          <h1 className="titulo-cabecera">Trabajo Práctico 2: Proyecto con React</h1>
          <p className="descripcion-cabecera">
            Bienvenidos a nuestro entorno de desarrollo. En este lugar exploramos la creación de Single Page Applications,
            enrutamiento dinámico, consumo de APIs y componentes interactivos para construir interfaces modernas.
          </p>
        </div>
      </header>

      <section className="seccion-estadisticas">
        <div className="tarjeta-estadistica">
          <span className="icono-estadistica">⚛️</span>
          <div className="info-estadistica">
            <h3>Tecnología Core</h3>
            <p>React + Vite</p>
          </div>
        </div>
        <div className="tarjeta-estadistica">
          <span className="icono-estadistica">🗺️</span>
          <div className="info-estadistica">
            <h3>Enrutamiento</h3>
            <p>React Router DOM</p>
          </div>
        </div>
        <div className="tarjeta-estadistica">
          <span className="icono-estadistica">✨</span>
          <div className="info-estadistica">
            <h3>Diseño UI</h3>
            <p>Moderno & Responsive</p>
          </div>
        </div>
      </section>

      <h2 className="titulo-seccion">Conocé a nuestro equipo</h2>
      <div className="grilla-tarjetas">

        <div className="tarjeta-perfil animacion-entrada-1">
          <div className="contenedor-avatar">
            <span className="avatar-emoji">👨‍💻</span>
          </div>
          <h2 className="nombre-tarjeta">Matias Contreras</h2>
          <p className="rol-tarjeta">Desarrollador Frontend</p>
          <button className="boton-acceso" onClick={() => navigate('/matias')}>Ver Perfil</button>
        </div>

        <div className="tarjeta-perfil animacion-entrada-2">
          <div className="contenedor-avatar">
            <span className="avatar-emoji">👩‍💻</span>
          </div>
          <h2 className="nombre-tarjeta">Maria Lopez</h2>
          <p className="rol-tarjeta">Desarrolladora Frontend</p>
          <button className="boton-acceso" onClick={() => navigate('/maria')}>Ver Perfil</button>
        </div>
        
      </div>
    </main>
  );
};

export default HomeDashboard;
