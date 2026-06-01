import React, { useState, useEffect } from 'react';
import './Gallery.css';

const imagenes = [
  { id: 1, url: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', titulo: 'Rick Sanchez' },
  { id: 2, url: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', titulo: 'Morty Smith' },
  { id: 3, url: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', titulo: 'Summer Smith' },
  { id: 4, url: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg', titulo: 'Beth Smith' },
  { id: 5, url: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg', titulo: 'Jerry Smith' },
  { id: 6, url: 'https://rickandmortyapi.com/api/character/avatar/47.jpeg', titulo: 'Birdperson' },
  { id: 7, url: 'https://rickandmortyapi.com/api/character/avatar/118.jpeg', titulo: 'Evil Morty' },
  { id: 8, url: 'https://rickandmortyapi.com/api/character/avatar/242.jpeg', titulo: 'Mr. Meeseeks' }
];

const Gallery = () => {
  const [imagenActiva, setImagenActiva] = useState(null);
  const [zoom, setZoom] = useState(false);

  const abrirLightbox = (index) => {
    setImagenActiva(index);
    setZoom(false);
  };

  const cerrarLightbox = () => {
    setImagenActiva(null);
    setZoom(false);
  };

  const siguienteImagen = (e) => {
    if (e) e.stopPropagation();
    setImagenActiva((prev) => (prev === imagenes.length - 1 ? 0 : prev + 1));
    setZoom(false);
  };

  const anteriorImagen = (e) => {
    if (e) e.stopPropagation();
    setImagenActiva((prev) => (prev === 0 ? imagenes.length - 1 : prev - 1));
    setZoom(false);
  };

  const alternarZoom = (e) => {
    e.stopPropagation();
    setZoom(!zoom);
  };

  useEffect(() => {
    const manejarTeclado = (e) => {
      if (imagenActiva === null) return;
      if (e.key === 'Escape') cerrarLightbox();
      if (e.key === 'ArrowRight') siguienteImagen();
      if (e.key === 'ArrowLeft') anteriorImagen();
    };

    window.addEventListener('keydown', manejarTeclado);
    return () => window.removeEventListener('keydown', manejarTeclado);
  }, [imagenActiva]);

  return (
    <div className="contenedor-galeria">
      <h2>Galería Interactiva</h2>
      <p>Haz clic en una imagen para abrir el Lightbox.</p>
      <div className="grilla-imagenes">
        {imagenes.map((img, index) => (
          <div key={img.id} className="item-galeria" onClick={() => abrirLightbox(index)}>
            <img src={img.url} alt={img.titulo} className="imagen-miniatura" />
            <div className="capa-hover">
              <span>Ver grande</span>
            </div>
          </div>
        ))}
      </div>

      {imagenActiva !== null && (
        <div className="lightbox-fondo" onClick={cerrarLightbox}>
          <button className="btn-cerrar" onClick={cerrarLightbox} title="Cerrar (ESC)">✖</button>
          
          <button className="btn-navegacion prev" onClick={anteriorImagen}>◀</button>
          
          <div className={`lightbox-contenido ${zoom ? 'zoom-activo' : ''}`} onClick={alternarZoom}>
            <img 
              src={imagenes[imagenActiva].url} 
              alt={imagenes[imagenActiva].titulo} 
              className="imagen-grande" 
            />
            <p className="texto-zoom">Haz clic en la imagen para {zoom ? 'alejar' : 'acercar'}</p>
          </div>
          <button className="btn-navegacion next" onClick={siguienteImagen}>▶</button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
