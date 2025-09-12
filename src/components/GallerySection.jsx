export default function GallerySection({ category }) {
  const images = {
    cctv: [
      '/imagenes/cctv1.jpg',
      '/imagenes/cctv2.png',
      '/imagenes/cctv3.png'
    ],
    automatizacion: [
      '/imagenes/auto1.jpg',
      '/imagenes/auto2.jpg',
      '/imagenes/auto3.jpg'
    ],
    acceso: [
      '/imagenes/acceso1.jpg',
      '/imagenes/acceso2.jpg',
      '/imagenes/acceso3.jpg'
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