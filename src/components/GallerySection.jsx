import { useState } from 'react';

export default function GallerySection({ category }) {
  const images = {
    cctv: [
      '/imagenes/cctv1.jpg',
      '/imagenes/cctv2.png',
      '/imagenes/cctv3.png',
      '/imagenes/cctv4.jpg'
    ],
    aplicaciones: [
      '/imagenes/acceso1.png',
      '/imagenes/app2.jpg',
      '/imagenes/app3.png'
    ],
    acceso: [
      '/imagenes/acceso1.png',
      '/imagenes/acceso2.png',
      '/imagenes/acceso3.png'
    ],
    fundamentos: [
      '/imagenes/codigo-colores-retie.png',
      '/imagenes/norma.png',
      '/imagenes/normarj45.png'
    ],
    simuladores: [
      '/imagenes/simuladores1.png',
    ]
  };

  const categoryImages = images[category] || [];
  const [selectedImg, setSelectedImg] = useState(null);

  // Cierra la imagen si se hace click fuera de ella
  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      setSelectedImg(null);
    }
  };

  return (
    <section className="gallery-section">
      <h3>Galería de Imágenes</h3>
      <div className="gallery-grid">
        {categoryImages.map((img, i) => (
          <div key={i} className="gallery-item">
            <img
              src={img}
              alt={`${category} imagen ${i + 1}`}
              onClick={() => setSelectedImg(img)}
              style={{ cursor: 'pointer' }}
            />
          </div>
        ))}
      </div>
      {selectedImg && (
        <div className="modal-overlay" onClick={handleOverlayClick} style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'rgba(0,0,0,0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setSelectedImg(null)}
              style={{
                position: 'absolute',
                top: '-30px',
                right: '-10px',
                background: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                fontSize: '1.5rem',
                cursor: 'pointer',
                boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
              }}
              aria-label="Cerrar"
            >×</button>
            <img
              src={selectedImg}
              alt="Imagen ampliada"
              style={{
                maxWidth: '90vw',
                maxHeight: '80vh',
                borderRadius: '10px',
                boxShadow: '0 4px 32px rgba(0,0,0,0.5)'
              }}
            />
          </div>
        </div>
      )}
    </section>
  );
}