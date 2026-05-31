import React, { useState, useEffect } from 'react';
import './MatiasProfile.css';

const MatiasProfile = () => {
  const [progreso, setProgreso] = useState(false);
  const [proyectoActual, setProyectoActual] = useState(0);

  const proyectos = [
    { titulo: "Proyecto 1: Maquetado con HTML y CSS", descripcion: "Mi primera web estática usando Flexbox." },
    { titulo: "Proyecto 2: Juego en JavaScript", descripcion: "Un juego clásico estilo Pong para el navegador." },
    { titulo: "Proyecto 3: API con Node.js", descripcion: "Backend básico construido con Express y Node." }
  ];

  useEffect(() => {
    setTimeout(() => {
      setProgreso(true);
    }, 300);
  }, []);

  const anteriorProyecto = () => {
    setProyectoActual(prev => (prev === 0 ? proyectos.length - 1 : prev - 1));
  };

  const siguienteProyecto = () => {
    setProyectoActual(prev => (prev === proyectos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="contenedor-perfil">
      <div className="tarjeta-presentacion">
        <div className="foto-placeholder">👨‍💻</div>
        <h2>Matias Contreras</h2>
        <p className="bio">"Estudiante de la Tecnicatura Superior en Desarrollo de Software, me encanta la tecnología, el deporte y crear código."</p>
        <p><strong>Edad:</strong> 26 años | <strong>Ciudad Actual:</strong> Venado Tuerto</p>
      </div>

      <div className="seccion-habilidades">
        <h3>Habilidades y Stack Tecnológico</h3>
        <div className="contenedor-iconos">
          <span className="icono-tech" title="HTML">🌐</span>
          <span className="icono-tech" title="CSS">🎨</span>
          <span className="icono-tech" title="JavaScript">⚡</span>
          <span className="icono-tech" title="Node.js">🟢</span>
          <span className="icono-tech" title="Java / C#">☕</span>
        </div>

        <div className="barra-contenedor">
          <span>HTML / CSS</span>
          <div className="barra-fondo">
            <div className="barra-progreso" style={{ width: progreso ? '90%' : '0%' }}></div>
          </div>
        </div>
        <div className="barra-contenedor">
          <span>JavaScript</span>
          <div className="barra-fondo">
            <div className="barra-progreso" style={{ width: progreso ? '80%' : '0%' }}></div>
          </div>
        </div>
        <div className="barra-contenedor">
          <span>Node.js / Bases de Datos (MySQL)</span>
          <div className="barra-fondo">
            <div className="barra-progreso" style={{ width: progreso ? '60%' : '0%' }}></div>
          </div>
        </div>
      </div>

      <div className="seccion-carrusel">
        <h3>Carrusel de Proyectos</h3>
        <div className="carrusel-pantalla">
          <button className="btn-carrusel" onClick={anteriorProyecto}>◀ Ant</button>
          <div className="carrusel-contenido">
            <h4>{proyectos[proyectoActual].titulo}</h4>
            <p>{proyectos[proyectoActual].descripcion}</p>
          </div>
          <button className="btn-carrusel" onClick={siguienteProyecto}>Sig ▶</button>
        </div>
      </div>

      <div className="seccion-redes">
        <h3>Mis Redes Sociales</h3>
        <div className="contenedor-redes">
          <a href="https://github.com/Matihp" className="btn-red github">GitHub</a>
          <a href="https://www.linkedin.com/in/matias-contreras-692953223/" className="btn-red linkedin">LinkedIn</a>
          <a href="https://contrerasmatias.dev.ar/" className="btn-red portafolio">Portafolio</a>
        </div>
      </div>
    </div>
  );
};

export default MatiasProfile;
