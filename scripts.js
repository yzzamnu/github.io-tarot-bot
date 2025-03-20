document.addEventListener('DOMContentLoaded', () => {
    const readingId = window.location.pathname.split('/').pop();
    fetch(`https://your_backend_url/reading/${readingId}`)
        .then(response => response.json())
        .then(data => {
            const readingDiv = document.getElementById('reading');
            data.reading.forEach(card => {
                const cardDiv = document.createElement('div');
                cardDiv.textContent = card;
                readingDiv.appendChild(cardDiv);
            });
        })
        .catch(error => console.error('Error fetching reading:', error));
});