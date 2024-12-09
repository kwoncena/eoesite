function navigateTo(page) {
    const contentArea = document.getElementById('content-area');
    fetch(page)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const mainContent = doc.querySelector('main');

            if (mainContent) {
                contentArea.innerHTML = mainContent.innerHTML;

                // If the About page is loaded, initialize the typewriter effect
                if (page === 'about.html') {
                    const script = document.createElement('script');
                    script.src = 'about.js';
                    document.body.appendChild(script);
                }
            } else {
                contentArea.innerHTML = `<h1>Error</h1><p>No <main> tag found in ${page}.</p>`;
            }
        })
        .catch(error => {
            console.error('Error loading page:', error);
            contentArea.innerHTML = `<h1>Error</h1><p>${error.message}</p>`;
        });
}


// Select all timeline points
const timelinePoints = document.querySelectorAll('.timeline-point');

timelinePoints.forEach((point) => {
  point.addEventListener('click', () => {
    const targetId = point.getAttribute('data-target'); // Get the target card ID
    const targetCard = document.getElementById(targetId); // Find the target card

    if (targetCard.classList.contains('open')) {
      // If the card is open, close it
      targetCard.classList.remove('open');
    } else {
      // Close any other open cards
      document.querySelectorAll('.card.open').forEach((card) => card.classList.remove('open'));

      // Open the clicked card
      targetCard.classList.add('open');
    }
  });
});

