import React, { useState, useEffect } from 'react';
import './MariaProfile.css';

const MariaProfile = () => {
  const [progreso, setProgreso] = useState(false);
  const [proyectoActual, setProyectoActual] = useState(0);

  const proyectos = [
    { titulo: "Proyecto 1: Landing Page Cafetería", descripcion: "Una página promocional maquetada con HTML y CSS." },
    { titulo: "Proyecto 2: To-Do App", descripcion: "Aplicación de lista de tareas usando React y useState." },
    { titulo: "Proyecto 3: Portafolio Personal", descripcion: "Diseño e implementación de mi propio portafolio." }
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
    <div className="contenedor-perfil-maria">
      <div className="tarjeta-presentacion-maria">
        <div className="foto-placeholder-maria">👩‍💻</div>
        <h2>Maria Lopez</h2>
        <p className="bio-maria">"Estudiante de Desarrollo de Software, apasionada por UI/UX y el frontend. Disfruto creando interfaces funcionales."</p>
        <p><strong>Edad:</strong> 51 años | <strong>Ciudad Actual:</strong> Venado Tuerto</p>
      </div>

      <div className="seccion-habilidades-maria">
        <h3>Mis Habilidades y Stack</h3>
        <div className="contenedor-iconos-maria">
          <span className="icono-tech-maria" title="HTML">🌐</span>
          <span className="icono-tech-maria" title="CSS">🎨</span>
          <span className="icono-tech-maria" title="JavaScript">⚡</span>
          <span className="icono-tech-maria" title="React">⚛️</span>
          <span className="icono-tech-maria" title="Figma">🖋️</span>
        </div>

        <div className="barra-contenedor-maria">
          <span>Diseño UX/UI (Figma)</span>
          <div className="barra-fondo-maria">
            <div className="barra-progreso-maria" style={{ width: progreso ? '95%' : '0%' }}></div>
          </div>
        </div>
        <div className="barra-contenedor-maria">
          <span>HTML / CSS</span>
          <div className="barra-fondo-maria">
            <div className="barra-progreso-maria" style={{ width: progreso ? '85%' : '0%' }}></div>
          </div>
        </div>
        <div className="barra-contenedor-maria">
          <span>React / JavaScript</span>
          <div className="barra-fondo-maria">
            <div className="barra-progreso-maria" style={{ width: progreso ? '70%' : '0%' }}></div>
          </div>
        </div>
      </div>

      <div className="seccion-carrusel-maria">
        <h3>Mis Proyectos</h3>
        <div className="carrusel-pantalla-maria">
          <button className="btn-carrusel-maria" onClick={anteriorProyecto}>◀ Ant</button>
          <div className="carrusel-contenido-maria">
            <h4>{proyectos[proyectoActual].titulo}</h4>
            <p>{proyectos[proyectoActual].descripcion}</p>
          </div>
          <button className="btn-carrusel-maria" onClick={siguienteProyecto}>Sig ▶</button>
        </div>
      </div>

      <div className="seccion-redes-maria">
        <h3>Conecta conmigo</h3>
        <div className="contenedor-redes-maria">
          <a href="https://github.com/Marialopez2020" className="btn-red-maria github-maria">GitHub</a>
          <a href="https://www.linkedin.com/in/maria-lopez-470862243/" className="btn-red-maria linkedin-maria">LinkedIn</a>
          <a href="https://pfo-1-maria-lopez.vercel.app/" className="btn-red-maria portfolio-maria">Portfolio</a>
        </div>
      </div>
    </div>
  );
};

export default MariaProfile;
