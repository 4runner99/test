const rainbowColors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#9400D3'];
let currentIndex = 0;
let intervalId;
const body = document.body;


function startRainbowWave() {
  if (!intervalId) { // Check if the animation is not running
    intervalId = setInterval(animateRainbow, 100);
    body.style.transition = 'none';
  }
}

function animateRainbow() {
  body.style.backgroundColor = rainbowColors[currentIndex];
  currentIndex = (currentIndex + 1) % rainbowColors.length;
}

document.getElementById('startButton').addEventListener('click', startRainbowWave);

document.getElementById('stopButton').addEventListener('click', function() {
  if (intervalId) {
    clearInterval(intervalId);
    intervalId = null;
    body.style.transition = 'background-color 0.5s ease';
    body.style.backgroundColor = 'white';
  }
});
