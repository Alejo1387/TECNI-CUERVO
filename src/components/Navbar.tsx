export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="https://www.tiktok.com/@tecnicuervo?_r=1&_t=ZS-96OEYOnJr9R" target="_blank" className="navbar-logo">
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
