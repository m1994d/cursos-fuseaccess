export default function VideoSection({ category }) {
  const videos = {
    cctv: [
      {
        title: 'Curso CCTV Básico (analogica y IP) 1/3 ',
        url: 'https://www.youtube.com/embed/CeK1ax_g3Rw'
      },
      {
        title: '2/3',
        url: 'https://www.youtube.com/embed/ZLvOOHGhxiY'
      },
      {
        title: '3/3',
        url: 'https://www.youtube.com/embed/bMN50W6ov8s'
      }
    ],
    automatizacion: [
      {
        title: 'Conceptos Básicos de Automatización',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        title: 'Sistemas de Control Industrial',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ],
    acceso: [
      {
        title: 'Sistemas de Control de Acceso',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      },
      {
        title: 'Biometría y Seguridad',
        url: 'https://www.youtube.com/embed/dQw4w9WgXcQ'
      }
    ]
  };

  const categoryVideos = videos[category] || [];

  return (
    <section className="video-section">
      <h3>Videos</h3>
      <div className="video-grid">
        {categoryVideos.map((video, index) => (
          <div key={index} className="video-item">
            <h4>{video.title}</h4>
            <iframe
              width="300"
              height="200"
              src={video.url}
              title={video.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
}