import Header from './components/Header';
import Tabs from './components/Tabs';
import VideoSection from './components/VideoSection';
import GallerySection from './components/GallerySection';
import DocsSection from './components/DocsSection';
import Footer from './components/Footer';
import './App.css';

// Componentes específicos para cada categoría
function FundamentosContent() {
  return (
    <div>
      <h2>Contenido material de apoyo</h2>
      <VideoSection category="fundamentos" />
      <GallerySection category="fundamentos" />      
      <DocsSection category="fundamentos" />
    </div>
  );
}

function CctvContent() {
  return (
    <div>
      <h2>Contenido de CCTV</h2>
      <VideoSection category="cctv" />
      <GallerySection category="cctv" />
      <DocsSection category="cctv" />
    </div>
  );
}

function AplicacionesContent() {
  return (
    <div>
      <h2>Contenido de Aplicaciones</h2>
      <VideoSection category="aplicaciones" />
      <GallerySection category="aplicaciones" />
      <DocsSection category="aplicaciones" />
    </div>
  );
}

function ControlAccesoContent() {
  return (
    <div>
      <h2>Contenido de Control de Acceso</h2>
      <VideoSection category="acceso" />
      <GallerySection category="acceso" />
      <DocsSection category="acceso" />
    </div>
  );
}

function ManualesContent() {
  return (
    <div>
      <h2>Contenido manuales y otros</h2>
      <VideoSection category="manuales" />
      <DocsSection category="manuales" />
    </div>
  );
}

function SimuladoresContent() {
  return (
    <div>
      <h2>Simuladores</h2>
      <p>Próximamente...</p>
    </div>
  );
}

function App() {
  const tabs = [
    {
      title: 'Fundamentos básicos',
      content: <FundamentosContent />
    },
    {
      title: 'CCTV',
      content: <CctvContent />
    },
    {
      title: 'Control de Acceso',
      content: <ControlAccesoContent />
    },
    {
      title: 'Aplicaciones',
      content: <AplicacionesContent />
    },
    {
      title: 'Manuales',
      content: <ManualesContent />
    },
    {
      title: 'Simuladores',
      content: <SimuladoresContent />,
    }
  ];

  return (
    <div className="App">
      <Header />
      <main>
        <Tabs tabs={tabs} />
      </main>
      <Footer />
    </div>
  );
}

export default App;