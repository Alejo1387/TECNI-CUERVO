interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    id: 1,
    icon: '🔧',
    title: 'Reparación de Celulares',
    description:
      'Reparamos pantallas, baterías, cámaras y componentes electrónicos con tecnología de punta.',
  },
  {
    id: 2,
    icon: '📱',
    title: 'Venta de Celulares',
    description: 'Dispositivos premium y accesibles con garantía oficial y servicio posventa.',
  },
  {
    id: 3,
    icon: '🎧',
    title: 'Accesorios Tecnológicos',
    description: 'Cables, protectores, audífonos y accesorios de marcas reconocidas.',
  },
  {
    id: 4,
    icon: '⚙️',
    title: 'Mantenimiento Preventivo',
    description: 'Limpieza, optimización y actualización de sistemas para máximo rendimiento.',
  },
];

export function Services() {
  return (
    <section className="services" id="services">
      <div className="services-container">
        <div className="services-header">
          <h2>Nuestros Servicios</h2>
          <p>Soluciones integrales para todos tus dispositivos tecnológicos</p>
        </div>
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
