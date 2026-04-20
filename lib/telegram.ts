type FormDataForTelegram = {
  name: string;
  events: string[];
  drinks: string[];
  allergies?: string;
  kids?: string;
};

export async function sendDataToTelegram(formData: FormDataForTelegram) {
  const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
  const apiUrl = `https://api.telegram.org/bot${botToken}/sendMessage`;

  const events = Array.isArray(formData.events) ? formData.events : [];
  const drinks = Array.isArray(formData.drinks) ? formData.drinks : [];

  // Формируем сообщение в HTML формате
  const message = `
  🎉 <b>Новая анкета с мероприятия</b>

    <b>Имя:</b> ${formData.name}
    <b>Части праздника:</b> ${events.length > 0 ? events.join(', ') : 'Не выбрано'}
    <b>Предпочитаемые напитки:</b> ${drinks.length > 0 ? drinks.join(', ') : 'Не выбрано'}
    <b>Аллергии/ограничения:</b> ${formData.allergies || 'Не указано'}
    <b>Аллергии/ограничения:</b> ${formData.kids || 'Не указано'}

    <b>Время отправки:</b> ${new Date().toLocaleString('ru-RU')}
  `;

  const params = {
    chat_id: chatId,
    text: message,
    parse_mode: 'HTML'
  };

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(params)
    });
    
    return await response.json();
  } catch (error) {
    console.error('Ошибка при отправке в Telegram:', error);
    throw error;
  }
}