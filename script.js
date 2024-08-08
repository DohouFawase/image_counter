const maxImages = 3;
let currentCount = 0;


const iconContainer = document.getElementById('container')
const incrementBtn = document.getElementById('increment-btn')
const decrementBtn = document.getElementById('decrement-btn')
const countDisplay = document.getElementById('count-display');



const images = [
    "image-2.png",
    "image-3.png",
    "image-4.png"
]


function updateIcons () {
      // Réinitialise le conteneur d'icônes
      iconContainer.innerHTML = '';

      for (let i = 0; i < currentCount; i++) {
        const img = document.createElement('img');
        img.className = 'icon-img';

        img.src = images[i % images.length];
        iconContainer.appendChild(img);

        
      }

      countDisplay.textContent =  currentCount;
}


incrementBtn.addEventListener('click', () => {
    if (currentCount < maxImages) {
        currentCount++;
        updateIcons();
    }
});

// Retirer une image
decrementBtn.addEventListener('click', () => {
    if (currentCount > 0) {
        currentCount--;
        updateIcons();
    }
});
