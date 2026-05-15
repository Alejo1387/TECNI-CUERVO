export function WhatsAppButton() {
  const phoneNumber = '573147657234';
  const message = 'Hola Tecni Cuervo, me gustaría conocer más sobre sus servicios.';

  const handleClick = () => {
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <button
      className="whatsapp-button"
      onClick={handleClick}
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      <img src="/logo-whatsapp.png" alt="WhatsApp" />
    </button>
  );
}
