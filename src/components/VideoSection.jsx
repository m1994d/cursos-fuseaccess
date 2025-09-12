export default function VideoSection({ category }) {
  const videos = {
    cctv: [
      {
        title: 'Curso CCTV Básico (analogica y IP) 1/3 ',
        url: 'https://www.youtube.com/embed/CeK1ax_g3Rw'
      },
      {
        title: 'Curso CCTV Básico (analogica y IP) 2/3',
        url: 'https://www.youtube.com/embed/ZLvOOHGhxiY'
      },
      {
        title: 'Curso CCTV Básico (analogica y IP) 3/3',
        url: 'https://www.youtube.com/embed/bMN50W6ov8s'
      }
    ],
    aplicaciones: [
      {
        title: 'Aplicación FuseAccess',
        url: 'https://www.youtube.com/embed/QvEoLIN1DA4'
      },
      {
        title: 'Apicación HikConnect',
        url: 'https://www.youtube.com/embed/aJou53c80ws'
      },
      {
        title: 'Aplicación HikPartner Pro',
        url: 'https://www.youtube.com/embed/mcaLvBqrtxY'
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