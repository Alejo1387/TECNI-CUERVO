export function Hero() {
  const phoneNumber = '573147657234';
  const message = 'Hola Tecni Cuervo, me gustaría solicitar un servicio.';

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <h1>
          Reparación Profesional de <span className="highlight">Dispositivos Tecnológicos</span>
        </h1>
        <p>
          Somos expertos en reparación y mantenimiento de celulares, tablets y accesorios. 
          Calidad premium con servicio ágil y garantizado.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={handleWhatsAppClick}>Solicitar Servicio</button>
          <button className="btn btn-secondary">Más Información</button>
        </div>
        <div className="hero-icons">
          {/* Tablet */}
          <svg className="hero-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="8" width="80" height="84" rx="6" stroke="url(#grad1)" strokeWidth="2" />
            <rect x="15" y="15" width="70" height="60" fill="url(#grad1)" opacity="0.1" />
            <circle cx="50" cy="80" r="3" fill="url(#grad1)" />
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF6A00" />
                <stop offset="100%" stopColor="#00B8FF" />
              </linearGradient>
            </defs>
          </svg>

          {/* Celular */}
          <svg className="hero-icon icon-phone" viewBox="0 0 60 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="10" width="44" height="80" rx="4" stroke="url(#grad2)" strokeWidth="2" />
            <rect x="12" y="18" width="36" height="52" fill="url(#grad2)" opacity="0.15" />
            <circle cx="30" cy="76" r="2" fill="url(#grad2)" />
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#00B8FF" />
                <stop offset="100%" stopColor="#FF6A00" />
              </linearGradient>
            </defs>
          </svg>

          {/* Esferas decorativas */}
          <div className="sphere sphere-1"></div>
          <div className="sphere sphere-2"></div>
          <div className="sphere sphere-3"></div>
        </div>
      </div>
    </section>
  );
}
