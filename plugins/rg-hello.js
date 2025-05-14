// Creditos BrayanOFC
//github.com/BrayanOFC

const command = {
  name: 'hello',
  description: 'Responde con un saludo.',
  execute: async (client, message) => {
    // 'client' sería tu objeto cliente del bot de WhatsApp
    // 'message' contendría los detalles del mensaje

    if (message.body === '!hello') {
      try {
        await client.reply(message.from, '¡Hola!', message.id.toString());
      } catch (error) {
        console.error('Error al enviar el mensaje:', error);
      }
    }
  },
};

module.exports = command;
handler.help = ['hello']
handler.tags = ['hola']
handler.command = ['hello', 'hola']