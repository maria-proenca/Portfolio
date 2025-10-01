
// Slideshow
document.querySelectorAll('.slideshow').forEach(slideshow => {
  const img = slideshow.querySelector('img');
  const imagePaths = slideshow.dataset.images.split(',');
  let currentIndex = 0;

  slideshow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % imagePaths.length;
    img.src = imagePaths[currentIndex];
  });
});

// More / Less toggle
document.querySelectorAll('.toggleBtn').forEach((button, index) => {
  const moreText = document.querySelectorAll('.more')[index];
  button.addEventListener('click', () => {
    moreText.classList.toggle('visible');
    button.textContent = moreText.classList.contains('visible')
      ? '[-]'
      : '[+]';
  });
});
