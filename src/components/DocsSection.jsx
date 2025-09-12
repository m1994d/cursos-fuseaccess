export default function DocsSection({ category }) {
  const docs = {
    cctv: [
      { title: 'Manual de Instalación CCTV', url: 'https://www.hikvision.com/content/dam/hikvision/es-la/brochures-esp/Gu%C3%ADa-del-Instalador-Hikvision.pdf' },
      { title: 'Guía de Configuración de Cámaras IP', url: 'https://www.hikvisioneurope.com/eu/portal/portal/Technical%20Materials/00%20%20Network%20Camera/02%20%20Product%20User%20Manuals%20%28multi-language%29/99-OldUserManuals/04-Spanish/UD04470B_Baseline_User%20Manual%20of%20Network%20Camera_V5.4.5_20170123_ES.pdf' }
    ],
    automatizacion: [
      { title: 'Fundamentos de Automatización', url: '/docs/fundamentos_auto.pdf' },
      { title: 'Protocolos Industriales', url: '/docs/protocolos.pdf' }
    ],
    acceso: [
      { title: 'Sistemas de Control de Acceso', url: '/docs/control_acceso.pdf' },
      { title: 'Seguridad Biométrica', url: '/docs/biometria.pdf' }
    ],
    manuales: [
      { title: 'Manuales', url: 'https://drive.google.com/drive/folders/1DIQOUQ_P1Ul5YITWdvSwdv9MqXxDK9VA?usp=drive_link' },
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