var ratio = window.devicePixelRatio;
document.getElementById('pixel-ratio').innerHTML += (ratio) ? '<h1>' + ratio + '</h1>' : '<p class="unsupported">Your Browser Doesn\'t Support devicePixelRatio.</p>';
getDimensions();

function getDimensions() {
  document.getElementById('width').innerHTML = window.innerWidth + ' px';
  document.getElementById('height').innerHTML = window.innerHeight + ' px';
}

window.addEventListener('resize', getDimensions);
