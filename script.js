function filterImages(category) {
  const images = document.querySelectorAll('.gallery img');

  images.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'inline-block';
    } else {
      img.style.display = 'none';
    }
  });
}
