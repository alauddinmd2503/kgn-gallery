document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const close = document.getElementById('close');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');

  const totalImages = 70; // 👈 Change this if you add more photos
  const images = [];

  // Load numbered images automatically
  for (let i = 1; i <= totalImages; i++) {
    const img = document.createElement('img');
    img.src = `photos/${i}.jpg`;
    img.alt = `Photo ${i}`;
    img.loading = 'lazy'; // 👈 Lazy loading
    gallery.appendChild(img);
    images.push(img);
  }

  let currentIndex = 0;

  // Open lightbox
  gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      currentIndex = images.indexOf(e.target);
      if (currentIndex !== -1) {
        lightboxImg.src = e.target.src;
        lightbox.classList.remove('hidden');
      }
    }
  });

  // Close lightbox
  close.addEventListener('click', () => lightbox.classList.add('hidden'));
  lightbox.addEventListener('click', (e) => { 
    if (e.target === lightbox) lightbox.classList.add('hidden'); 
  });

  // Next / Prev buttons
  next.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    lightboxImg.src = images[currentIndex].src;
  });

  prev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    lightboxImg.src = images[currentIndex].src;
  });
});
