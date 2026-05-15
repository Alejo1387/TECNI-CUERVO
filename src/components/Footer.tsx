export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-section">
          <h4>Tecni Cuervo</h4>
          <p>Reparación y venta de dispositivos tecnológicos con garantía y profesionalismo.</p>
        </div>
        <div className="footer-section">
          <h4>Servicios</h4>
          <p>
            Reparación de celulares y tablets
            <br />
            Venta de accesorios
            <br />
            Mantenimiento preventivo
          </p>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>
            📞 +57 314 765 7234
            <br />
            💬 Disponible en WhatsApp
            <br />
            📍 Servicio a domicilio
          </p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {currentYear} Tecni Cuervo. Todos los derechos reservados. | Diseño Premium</p>
      </div>
    </footer>
  );
}
