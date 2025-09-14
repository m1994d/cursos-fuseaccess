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
    ]
  };

  const categoryImages = images[category] || [];

  return (
    <section className="gallery-section">
      <h3>Galería de Imágenes</h3>
      <div className="gallery-grid">
        {categoryImages.map((img, i) => (
          <div key={i} className="gallery-item">
            <img
              src={img}
              alt={`${category} imagen ${i + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}