// Automatically display all images from the "photos" folder
const gallery = document.getElementById('gallery');

// Replace this number with your total number of images if needed
const totalImages = 47;

for (let i = 1; i <= totalImages; i++) {
  const img = document.createElement('img');
  img.src = `photos/Latest_Sample_PDF_page-${String(i).padStart(4, '0')}.jpg`;
  img.alt = `Photo ${i}`;
  gallery.appendChild(img);
}
