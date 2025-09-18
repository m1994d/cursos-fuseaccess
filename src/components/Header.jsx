import './Header.css';

export default function Header() {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo-container">
          <img 
            src="logo-blanco.png" 
            alt="Logo del Curso" 
            className="header-logo"
          />
        </div>
        <div className="header-text">
          <h1>Curso de inducción a instaladores</h1>
          <p>
            <em>
              "Juntarse es el comienzo. Mantenerse juntos es un progreso. Trabajar juntos es el éxito" : Henry Ford.
            </em>
          </p>
        </div>
      </div>
    </header>
  );
}