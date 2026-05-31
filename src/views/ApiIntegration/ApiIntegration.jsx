import React, { useState, useEffect } from 'react';
import './ApiIntegration.css';

const ApiIntegration = () => {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(null);
  const [paginaActual, setPaginaActual] = useState(1);
  const [totalPaginas, setTotalPaginas] = useState(1);

  useEffect(() => {
    const obtenerDatos = async () => {
      setCargando(true);
      setError(null);
      try {
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?page=${paginaActual}`);
        if (!respuesta.ok) {
          throw new Error('Error al obtener los datos de la API');
        }
        const datos = await respuesta.json();
        setPersonajes(datos.results);
        setTotalPaginas(datos.info.pages);
      } catch (err) {
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    obtenerDatos();
  }, [paginaActual]);

  const paginaAnterior = () => {
    if (paginaActual > 1) {
      setPaginaActual(paginaActual - 1);
    }
  };

  const paginaSiguiente = () => {
    if (paginaActual < totalPaginas) {
      setPaginaActual(paginaActual + 1);
    }
  };

  return (
    <div className="contenedor-api">
      <h2 className="titulo-api">Explorador de Rick and Morty</h2>
      <p className="descripcion-api">Consumiendo la API pública de Rick and Morty con paginación.</p>
      
      {error && <div className="mensaje-error">Hubo un error: {error}</div>}
      
      {cargando ? (
        <div className="mensaje-cargando">Cargando personajes... ⏳</div>
      ) : (
        <div className="grilla-personajes">
          {personajes.map((personaje) => (
            <div key={personaje.id} className="tarjeta-personaje">
              <img src={personaje.image} alt={personaje.name} className="imagen-personaje" />
              <h3 className="nombre-personaje">{personaje.name}</h3>
              <p className="estado-personaje">
                <strong>Estado:</strong> {personaje.status === 'Alive' ? '🟢 Vivo' : personaje.status === 'Dead' ? '🔴 Muerto' : '⚪ Desconocido'}
              </p>
              <p className="especie-personaje"><strong>Especie:</strong> {personaje.species}</p>
            </div>
          ))}
        </div>
      )}

      <div className="paginacion-api">
        <button 
          onClick={paginaAnterior} 
          disabled={paginaActual === 1 || cargando}
          className="btn-paginacion"
        >
          ◀ Anterior
        </button>
        <span className="indicador-pagina">
          Página {paginaActual} de {totalPaginas}
        </span>
        <button 
          onClick={paginaSiguiente} 
          disabled={paginaActual === totalPaginas || cargando}
          className="btn-paginacion"
        >
          Siguiente ▶
        </button>
      </div>
    </div>
  );
};

export default ApiIntegration;
