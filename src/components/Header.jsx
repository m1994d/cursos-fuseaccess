import './Header.css';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo-container">
          <img 
            src="logo.png" 
            alt="Logo del Curso" 
            className="header-logo"
          />
        </div>
        <div className="header-text">
          <h1>Curso de CCTV y Control de Accesos</h1>
          <p>Aprende con videos, imágenes y documentación</p>
        </div>
      </div>
    </header>
  );
}