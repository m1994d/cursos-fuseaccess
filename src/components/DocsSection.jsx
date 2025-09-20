export default function DocsSection({ category }) {
  const docs = {
    cctv: [
      { title: 'Manual de Instalación CCTV', url: 'https://www.hikvision.com/content/dam/hikvision/es-la/brochures-esp/Gu%C3%ADa-del-Instalador-Hikvision.pdf' },
      { title: 'Guía de Configuración de Cámaras IP', url: 'https://gruponavarro.pe/blog/configurar-camaras-ip-hikvision/' }
    ],
    aplicaciones: [
      { title: 'FusePong', url: 'https://fusepong.com/' },
      { title: 'FuseAccess', url: 'https://fuseaccess.com/quienes-somos/' }      
    ],
    acceso: [
      { title: 'Sistemas de Control de Acceso', url: '/docs/control_acceso.pdf' },
      { title: 'Terminales Faciales HikVision', url: 'https://www.hikvision.com/es-co/products/Access-Control-Products/Face-Recognition-Terminals/?category=Control+de+Acceso+3.0+Hikvision+con+IA+%7C+Seguridad+Facial+Sin+Contacto&subCategory=Terminales+de+reconocimiento+facial&checkedSubSeries=null' },
      { title: 'Seguridad Biométrica', url: '/docs/biometria.pdf' }
    ],
    manuales: [
      { title: 'Manuales', url: 'https://drive.google.com/drive/folders/1DIQOUQ_P1Ul5YITWdvSwdv9MqXxDK9VA?usp=drive_link' },
      { title: 'Canal para entrenamiento SEGO', url: 'https://www.youtube.com/c/SEGOSeguridad%C3%93ptima/videos'}
    ],
    fundamentos: [
      { title: 'Fundamentos', url: 'https://docs.google.com/document/d/16ApJcIKwAWvpwgXG8sq2nRDTup26yXx3q0ztq4r8LjA/edit?tab=t.0' },
      { title: 'Curso tactico de tuberia eléctrica', url: 'https://www.youtube.com/watch?v=8bjuNlIhZXs&list=PLb7PdgLBShiqyp1lEJ2IPYukFnATttAG0'},
      { title: 'Normativas', url: 'https://www.youtube.com/@RettvNoticias' }
    ]
  };
 
  const categoryDocs = docs[category] || [];

  return (
    <section className="docs-section">
      <h3>Documentación</h3>
      <ul className="docs-list">
        {categoryDocs.map((doc, i) => (
          <li key={i}>
            <a href={doc.url} target="_blank" rel="noreferrer">
              {doc.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}