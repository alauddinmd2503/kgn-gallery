const gallery = document.getElementById('gallery');
fetch('photos/')
  .then(resp => resp.text())
  .then(text => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text,'text/html');
    const links = Array.from(doc.querySelectorAll('a'));
    const images = links.map(a=>a.getAttribute('href')).filter(h => h.match(/\.(jpe?g|png|webp|gif)$/i));
    if(images.length===0){
      const msg = document.createElement('p');
      msg.textContent = 'No images found. Add your images to the /photos folder.';
      gallery.appendChild(msg);
    } else {
      images.forEach(src=>{
        const img = document.createElement('img');
        img.src='photos/'+src;
        img.alt=src;
        gallery.appendChild(img);
      });
    }
  })
  .catch(err=>{
    const msg = document.createElement('p');
    msg.textContent = 'Error loading images.';
    gallery.appendChild(msg);
  });
