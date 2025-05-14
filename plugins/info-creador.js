function enviarNumeroCreador() {
  const numeroCreador = "+526633900512"; // Reemplaza con el número del creador

  const mensaje = `El número del creador es: ${numeroCreador}`;

  // Simulación de envío a WhatsApp (esto no enviará directamente)
  console.log("Mensaje para WhatsApp:\n" + mensaje);
  alert("Copia el siguiente mensaje y pégalo en WhatsApp:\n\n" + mensaje);

  // Para una integración real con WhatsApp, necesitarías usar la API de WhatsApp Web
  // o una librería que la gestione, lo cual es más complejo.
}

enviarNumeroCreador();
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño']