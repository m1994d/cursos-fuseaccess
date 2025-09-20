export default function VideoSection({ category }) {
  const videos = {
    cctv: {
      equipos: [
        { title: 'Curso CCTV Básico (analogica y IP) 1/3 ', url: 'https://www.youtube.com/embed/CeK1ax_g3Rw' },
        { title: 'Curso CCTV Básico (analogica y IP) 2/3', url: 'https://www.youtube.com/embed/ZLvOOHGhxiY' },
        { title: 'Curso CCTV Básico (analogica y IP) 3/3', url: 'https://www.youtube.com/embed/bMN50W6ov8s' }
      ]
    },
    aplicaciones: {
      apps: [
        { title: 'Aplicación FuseAccess', url: 'https://www.youtube.com/embed/QvEoLIN1DA4' },
        { title: 'Apicación HikConnect', url: 'https://www.youtube.com/embed/aJou53c80ws' },
        { title: 'Aplicación HikPartner Pro', url: 'https://www.youtube.com/embed/mcaLvBqrtxY' }
      ]
    },
    acceso: {
      biometria: [
        { title: 'Control de Acceso y Asistencia Hikvision', url: 'https://www.youtube.com/embed/UkvivvTlzDs' },
        { title: 'Biometría y Seguridad', url: 'https://www.youtube.com/embed/_Qvd4f1Xt30' }
      ],
      alarmas: [
        { title: 'Alarma de intrusión inalámbrica AX HOME', url: 'https://www.youtube.com/embed/gycAAjGEiwY' },
        { title: 'Como Configurar Alarma HIkvision AXPRO', url: 'https://www.youtube.com/embed/L2Z76_sDJxM' }
      ],
      facial: [
        { title: 'Nueva terminal facial MinMoe K1T344 de HikVision', url: 'https://www.youtube.com/embed/bCoLZXrPB7Q' }
      ],
      dispositivos: [
        { title: 'Como instalar un Electroiman en una puerta (con soporte ZL)', url: 'https://www.youtube.com/embed/hELZYSxK8ow' },
        { title: 'Cómo instalar una cerradura eléctrica en una puerta con marco metálico', url: 'https://www.youtube.com/embed/3pX4jv2b7Hk' },
        { title: 'Cómo instalar una cerradura eléctrica en una puerta', url: 'https://www.youtube.com/embed/qi5JJ_Qgzxw' }
      ]
    },
    manuales: {
      apuntes: [
        { title: 'Cómo estudiar y tomar apuntes', url: 'https://www.youtube.com/embed/xQr-HWyA2Oo' }
      ]
    },
    fundamentos: {
      electricidad: [
        { title: 'Curso tactico de tubería EMT', url: 'https://www.youtube.com/embed/8bjuNlIhZXs&list=PLb7PdgLBShiqyp1lEJ2IPYukFnATttAG0' },
        { title: 'Cómo hacer una instalación ELÉCTRICA segura', url: 'https://www.youtube.com/embed/gHBO3zYcRZI' },
        { title: 'Instalación eléctrica paso a paso', url: 'https://www.youtube.com/embed/ELqsMCCNlvA' },
        { title: 'Norma RETIE y NTC 2050 ', url: 'https://www.youtube.com/embed/fcN9ayjzqbU' },
        { title: 'Cómo se hace una inspección a una instalación eléctrica', url: 'https://www.youtube.com/embed/dITYmqSjjKE' },
      ],
      datos: [
        { title: ' Curso Cableado Estructurado - Parte 1', url: 'https://www.youtube.com/embed/LYicldCPKrc' },
        { title: ' Curso Cableado Estructurado - Parte 2', url: 'https://www.youtube.com/embed/J_kaPlxQxEg' }
      ]
    }
  };

  // Nombres legibles para las materias
  const materiaTitles = {
    equipos: 'Equipos',
    apps: 'Aplicaciones',
    biometria: 'Biometría',
    dispositivos: 'Dispositivos de Acceso',
    alarmas: 'Alarmas',
    facial: 'Reconocimiento Facial',
    apuntes: 'Apuntes',
    electricidad: 'Electricidad',
    datos: 'Datos y Redes'
  };

  const categoryMaterias = videos[category] || {};

  return (
    <section className="video-section">
      <h3>Videos</h3>
      {Object.entries(categoryMaterias).map(([materia, vids]) => (
        <div key={materia}>
          <h4 style={{ margin: '1.5rem 0 1rem 0', color: '#1B81FF' }}>
            {materiaTitles[materia] || materia}
          </h4>
          <div className="video-grid">
            {vids.map((video, index) => (
              <div key={index} className="video-item">
                <h5>{video.title}</h5>
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
        </div>
      ))}
    </section>
  );
}