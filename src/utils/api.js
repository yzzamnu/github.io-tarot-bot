import axios from 'axios';

// Базовый URL для API Google Sheets
const SHEETS_API_URL = 'https://sheets.googleapis.com/v4/spreadsheets';

const api = {
  // Получение расклада по ID
  async getSpread(spreadId) {
    try {
      // Здесь должен быть запрос к вашему API или Google Sheets
      // Пока возвращаем моковые данные
      return {
        id: spreadId,
        cards: ['The Fool', 'The Magician', 'The High Priestess'],
        descriptions: [
          'Начало нового пути',
          'Сила воли и мастерство',
          'Интуиция и тайны'
        ]
      };
    } catch (error) {
      console.error('Error fetching spread:', error);
      throw error;
    }
  }
};

export default api;