const bodyEl = document.querySelector ('body');

bodyEl.addEventListener ('mousemove', event => {
  const xPos = event.offsetX;
  const yPos = event.offsetY;
  const heartEl = document.createElement('span');
  heartEl.style.left = xPos + 'px';
  heartEl.style.top = yPos + 'px';
  const size = Math.random() * 100;
  heartEl.style.width = size + "px";
  heartEl.style.height = size + "px";
  bodyEl.appendChild(heartEl);
  setTimeout(() => {
    heartEl.remove();
  },3000);
});
