document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const close = document.getElementById('close');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');

  // Allowed image extensions
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp'];

  // Automatically load all images in the /photos folder
  // IMPORTANT: For static hosting like Netlify, we need a fixed list
  // So we generate it manually at build time OR use a helper like this:
  const images = [];

  // Replace "photos" folder contents manually here if needed, or keep the filenames consistent
  for (let i = 1; i <= 100; i++) { // Adjust max number if needed
    allowedExtensions.forEach(ext => {
      const filename = `photos/photo${i}.${ext}`;
      const img = document.createElement('img');
      img.src = filename;
      img.alt = `Photo ${i}`;
      img.onerror = () => img.remove(); // Remove if file doesn't exist
      gallery.appendChild(img);
      images.push(img);
    });
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
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) lightbox.classList.add('hidden'); });

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
