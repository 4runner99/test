const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
let currentIndex = 0;
let intervalId;
const body = document.body;

function startRainbowWave() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    body.style.transition = 'background-color 0.5s ease'; // Optional: Add a smooth transition when stopping the animation
  } else {
    intervalId = setInterval(animateRainbow, 100); // Animate the rainbow every 100 milliseconds
    body.style.transition = 'none'; // Remove transition for smoother color change
  }
}

function animateRainbow() {
  body.style.backgroundColor = rainbowColors[currentIndex];
  currentIndex = (currentIndex + 1) % rainbowColors.length;
}

document.getElementById('startButton').addEventListener('click', startRainbowWave);
