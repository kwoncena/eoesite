function navigateTo(page) {
  const contentArea = document.getElementById('content-area');
  const leftColumn = document.querySelector('.left-column');

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
          const mainContent = doc.querySelector('main') || doc.body;

          if (mainContent) {
              contentArea.innerHTML = mainContent.innerHTML;

              // Update left-column if needed
              const newLeftColumn = doc.querySelector('.left-column');
              if (newLeftColumn && leftColumn) {
                  leftColumn.innerHTML = newLeftColumn.innerHTML;
              }

              // Dynamically load page-specific scripts
              const scripts = doc.querySelectorAll('script');
              scripts.forEach(script => {
                  const newScript = document.createElement('script');
                  newScript.src = script.src;
                  document.body.appendChild(newScript);
              });

              const pageLoadedEvent = new Event('pageLoaded');
              document.dispatchEvent(pageLoadedEvent);
          } else {
              contentArea.innerHTML = `<h1>Error</h1><p>No <main> tag found in ${page}.</p>`;
          }
      })
      .catch(error => {
          console.error('Error loading page:', error);
          contentArea.innerHTML = `<h1>Error</h1><p>${error.message}</p>`;
      });
}

function reloadPage() {
  window.location.reload(); // Reloads the current page
}
document.addEventListener('DOMContentLoaded', () => {
  // Get the video element
  const backgroundVideo = document.getElementById('background-video');

  // Get the Talk button
  const talkButton = document.getElementById('talk-button');

  // Stop the video when the Talk button is clicked
  talkButton.addEventListener('click', () => {
      backgroundVideo.pause();
      backgroundVideo.currentTime = 0; // Reset video playback
  });
});

document.addEventListener('DOMContentLoaded', () => {
  // Select all timeline points and the shared audio element
  const timelinePoints = document.querySelectorAll('.timeline-point');
  const audioElement = document.getElementById('shared-audio');

  // Add click event listener to each timeline point
  timelinePoints.forEach(point => {
      point.addEventListener('click', () => {
          // Stop and reset audio if it's already playing
          if (!audioElement.paused) {
              audioElement.pause();
              audioElement.currentTime = 0;
          }

          // Play the audio
          audioElement.play();
      });
  });
});

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

