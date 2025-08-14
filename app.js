// Mobile nav toggle
const btn = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
btn?.addEventListener('click', ()=> menu.classList.toggle('show'));

// Smooth scroll for in-page links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', e=>{
    const id = a.getAttribute('href');
    if(id && id.startsWith('#')){
      e.preventDefault();
      document.querySelector(id)?.scrollIntoView({behavior:'smooth', block:'start'});
      menu?.classList.remove('show');
    }
  });
});

// Certificate zoom feature
document.querySelectorAll('.cert-item img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.id = 'certModal';
    modal.classList.add('close-area');
    modal.innerHTML = `<img src="${img.dataset.full}" alt="Certificate">`;
    document.body.appendChild(modal);
    modal.style.display = 'flex';
    modal.addEventListener('click', () => modal.remove());
  });
});

// Contact form mailto (opens default email app)
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
  // Allow mailto to handle
});
