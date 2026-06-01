import React, { useState, useEffect } from 'react';
import './Gallery.css';

const imagenes = [
  { id: 1, url: 'https://picsum.photos/id/1015/600/400', titulo: 'Paisaje 1' },
  { id: 2, url: 'https://picsum.photos/id/1016/600/400', titulo: 'Paisaje 2' },
  { id: 3, url: 'https://picsum.photos/id/1018/600/400', titulo: 'Naturaleza' },
  { id: 4, url: 'https://picsum.photos/id/1019/600/400', titulo: 'Atardecer' },
  { id: 5, url: 'https://picsum.photos/id/1020/600/400', titulo: 'Montañas' },
  { id: 6, url: 'https://picsum.photos/id/1021/600/400', titulo: 'Bosque' },
  { id: 7, url: 'https://picsum.photos/id/1022/600/400', titulo: 'Cielo Estrellado' },
  { id: 8, url: 'https://picsum.photos/id/1023/600/400', titulo: 'Oceano' }
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
