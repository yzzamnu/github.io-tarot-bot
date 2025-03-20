document.addEventListener('DOMContentLoaded', function() {
    // Получаем ID расклада из URL
    const urlParams = new URLSearchParams(window.location.hash.slice(1));
    const spreadId = urlParams.get('spreadId');

    if (!spreadId) {
        showError('ID расклада не найден');
        return;
    }

    // Загружаем данные расклада (пока используем моковые данные)
    const mockSpread = {
        id: spreadId,
        cards: ['The Fool', 'The Magician', 'The High Priestess'],
        descriptions: [
            'Начало нового пути',
            'Сила воли и мастерство',
            'Интуиция и тайны'
        ]
    };

    displaySpread(mockSpread);
});

function displaySpread(spread) {
    const spreadContainer = document.getElementById('spread');
    
    // Создаем HTML для расклада
    const html = `
        <h1>Расклад Таро</h1>
        <div class="cards-container">
            ${spread.cards.map((card, index) => `
                <div class="card">
                    <img src="assets/cards/${card.toLowerCase().replace(/ /g, '-')}.jpg" 
                         alt="${card}"
                         onerror="this.src='assets/cards/default.jpg'">
                    <h2>${card}</h2>
                    <p>${spread.descriptions[index]}</p>
                </div>
            `).join('')}
        </div>
    `;

    spreadContainer.innerHTML = html;
}

function showError(message) {
    const spreadContainer = document.getElementById('spread');
    spreadContainer.innerHTML = `
        <h1>Ошибка</h1>
        <p style="text-align: center; color: #ff6b6b;">${message}</p>
    `;
}