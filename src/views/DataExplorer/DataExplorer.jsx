import React, { useState } from 'react';
import peliculas from '../../data/datos.json';
import './DataExplorer.css';

const DataExplorer = () => {
  const [busqueda, setBusqueda] = useState('');

  const peliculasFiltradas = peliculas.filter((pelicula) => 
    pelicula.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
    pelicula.genero.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="contenedor-explorador">
      <h2>Explorador de Datos (JSON)</h2>
      <p>Catalogo de Peliculas Favoritas</p>
      
      <div className="caja-buscador">
        <input 
          type="text" 
          placeholder="Buscar por título o género..." 
          className="input-buscador"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
      </div>

      <div className="resultados-busqueda">
        <p>Mostrando {peliculasFiltradas.length} resultado(s)</p>
      </div>

      <div className="grilla-datos">
        {peliculasFiltradas.length > 0 ? (
          peliculasFiltradas.map((pelicula) => (
            <div key={pelicula.id} className="tarjeta-dato">
              <h3>{pelicula.titulo}</h3>
              <p><strong>Género:</strong> {pelicula.genero}</p>
              <p><strong>Año:</strong> {pelicula.año}</p>
            </div>
          ))
        ) : (
          <p className="mensaje-vacio">No se encontraron películas con esa búsqueda.</p>
        )}
      </div>
    </div>
  );
};

export default DataExplorer;
