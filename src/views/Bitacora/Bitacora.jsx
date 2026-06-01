import React from 'react';
import './Bitacora.css';

const Bitacora = () => {
  return (
    <div className="contenedor-bitacora">
      <h1>Bitácora de Proyecto</h1>
      
      <section className="seccion-justificacion">
        <h2>Justificación Técnica: Migración de HTML/JS a React</h2>
        <p>
          En el primer trabajo práctico utilizamos HTML puro, CSS y JavaScript. Aunque fue útil para aprender las bases de la web, a medida que la aplicación crecía en complejidad, el código se volvía más difícil de mantener. 
        </p>
        <p>
          Para este segundo trabajo práctico se nos planteó el desafío de migrar el proyecto a <strong>React</strong>. Al llevar a cabo esta migración, pudimos comprobar en la práctica las siguientes ventajas frente al HTML/JS puro:
        </p>
        <ul>
          <li><strong>Componentización:</strong> Ahora podemos dividir la interfaz en piezas reutilizables (como el Sidebar, el Navbar y las tarjetas), evitando repetir código en múltiples archivos HTML.</li>
          <li><strong>Estado y Reactividad:</strong> Con hooks como <code>useState</code> y <code>useEffect</code>, la interfaz se actualiza automáticamente cuando cambian los datos (como vimos en el buscador JSON o en la Galería), sin tener que manipular el DOM manualmente.</li>
          <li><strong>Enrutamiento (SPA):</strong> Gracias a <code>react-router-dom</code>, convertimos el sitio en una <em>Single Page Application</em>. Ahora la navegación es instantánea y la página no se recarga completamente al cambiar de sección, dando una experiencia mucho más fluida.</li>
        </ul>
      </section>

      <section className="seccion-flujo-trabajo">
        <h2>Flujo de Trabajo y Roles</h2>
        <p><em>(Pendiente de documentar por María...)</em></p>
      </section>

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
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Bitacora;
