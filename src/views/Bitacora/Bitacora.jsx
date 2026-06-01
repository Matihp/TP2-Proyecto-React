import React from 'react';
import './Bitacora.css';

const Bitacora = () => {
  return (
    <div className="contenedor-bitacora">
      <h1>Bitácora de Proyecto</h1>
      
      <div className="secciones-superiores">
        <section className="seccion-justificacion">
          <h2>Migración a React</h2>
          <p>
            Al migrar de HTML puro a <strong>React</strong> comprobamos grandes ventajas:
          </p>
          <ul>
            <li><strong>Componentización:</strong> Dividimos la interfaz en piezas reutilizables (Sidebar, Navbar) evitando repetir código.</li>
            <li><strong>Reactividad:</strong> Usando <code>useState</code>, la interfaz se actualiza sola al cambiar los datos (ej: buscador JSON).</li>
            <li><strong>SPA:</strong> Con <code>react-router-dom</code> la navegación es instantánea sin recargar la página.</li>
          </ul>
        </section>

        <section className="seccion-flujo-trabajo">
          <h2>Flujo de Trabajo y Roles</h2>
          <p>
            Utilizamos <strong>Trello</strong> para organizar visualmente qué componente le tocaba a cada uno (Matias o Maria) y evitar pisarnos.
          </p>
          <p>
            En Git, para evitar conflictos (merge conflicts), estructuramos el proyecto separando los archivos JSX y CSS de cada vista.
          </p>
          <ul>
            <li><strong>Matias:</strong> Layout, explorador JSON, su perfil personal y Galería.</li>
            <li><strong>Maria:</strong> Sidebar, Dashboard, API (Rick and Morty), su perfil personal y Árbol de renderizado.</li>
          </ul>
        </section>
      </div>

      <section className="seccion-historial">
        <h2>Historial de Desarrollo (Commits)</h2>
        <div className="contenedor-tabla">
          <table className="tabla-bitacora">
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Autor</th>
                <th>Descripción</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>30/05/2026</td><td>Matias</td><td>Inicialicé el proyecto base con React Router</td></tr>
              <tr><td>30/05/2026</td><td>Maria</td><td>Creé el componente Sidebar con enlaces de navegación</td></tr>
              <tr><td>30/05/2026</td><td>Matias</td><td>Configuré las rutas y la estructura principal del Layout</td></tr>
              <tr><td>30/05/2026</td><td>Maria</td><td>Diseñé el panel principal (Dashboard) con tarjetas de acceso rápido</td></tr>
              <tr><td>30/05/2026</td><td>Matias</td><td>Creé los archivos base para la Bitácora y el Árbol de Renderizado</td></tr>
              <tr><td>31/05/2026</td><td>Matias</td><td>Armé mi página de perfil con barras animadas</td></tr>
              <tr><td>31/05/2026</td><td>Maria</td><td>Desarrollé mi propia página de perfil</td></tr>
              <tr><td>31/05/2026</td><td>Matias</td><td>Implementé el explorador de datos JSON con búsqueda en tiempo real</td></tr>
              <tr><td>31/05/2026</td><td>Maria</td><td>Integré una API externa con sistema de paginación</td></tr>
              <tr><td>31/05/2026</td><td>Matias</td><td>Vinculé las nuevas vistas al enrutador principal en App.jsx</td></tr>
              <tr><td>31/05/2026</td><td>Matias</td><td>Construí la galería de imágenes interactiva con lightbox</td></tr>
              <tr><td>31/05/2026</td><td>Maria</td><td>Documenté el árbol de renderizado de la aplicación</td></tr>
              <tr><td>01/06/2026</td><td>Matias</td><td>Inicié el README y redacté la justificación de la migración a React</td></tr>
              <tr><td>01/06/2026</td><td>Maria</td><td>Completé la estructura inicial del README y documenté el flujo de trabajo</td></tr>
              <tr><td>01/06/2026</td><td>Matias</td><td>Hice el Layout responsive (menú hamburguesa) e integré la Galería</td></tr>
              <tr><td>01/06/2026</td><td>Maria</td><td>Ajustes estéticos finales del tema MatrixDevs y preparativos en index.html</td></tr>
              <tr><td>01/06/2026</td><td>Matias</td><td>Actualicé la Bitácora con lo realizado y finalicé el README.md</td></tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Bitacora;
