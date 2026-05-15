export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="navbar-logo">
          <img src="/logo-tecni-cuervo.jpeg" alt="Tecni Cuervo" />
          <span>Tecni Cuervo</span>
        </a>
        <ul className="navbar-nav">
          <li>
            <a href="#services">Servicios</a>
          </li>
          <li>
            <a href="#contact">Contacto</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
