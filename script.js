document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const close = document.getElementById('close');
  const next = document.getElementById('next');
  const prev = document.getElementById('prev');

  // Supported extensions
  const allowedExtensions = ['jpg', 'jpeg', 'png', 'gif', 'webp', 'JPG', 'JPEG', 'PNG', 'GIF', 'WEBP'];

  // Adjust this to the number of photos you have (e.g. 47)
  const totalImages = 100;
  const images = [];

  for (let i = 1; i <= totalImages; i++) {
    for (const ext of allowedExtensions) {
      const img = document.createElement('img');
      img.src = `photos/${i}.${ext}`;
      img.alt = `Photo ${i}`;
      img.onerror = () => img.remove(); // Removes if file doesn’t exist
      gallery.appendChild(img);
      images.push(img);
    }
  }

  let currentIndex = 0;

  // Open lightbox
  gallery.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG') {
      const allImgs = [...gallery.querySelectorAll('img')];
      currentIndex = allImgs.indexOf(e.target);
      lightboxImg.src = e.target.src;
      lightbox.classList.remove('hidden');
    }
  });

  // Close lightbox
  close.addEventListener('click', () => lightbox.classList.add('hidden'));
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) lightbox.classList.add('hidden');
  });

  // Next / Prev buttons
  next.addEventListener('click', () => {
    const allImgs = [...gallery.querySelectorAll('img')];
    currentIndex = (currentIndex + 1) % allImgs.length;
    lightboxImg.src = allImgs[currentIndex].src;
  });

  prev.addEventListener('click', () => {
    const allImgs = [...gallery.querySelectorAll('img')];
    currentIndex = (currentIndex - 1 + allImgs.length) % allImgs.length;
    lightboxImg.src = allImgs[currentIndex].src;
  });
});
