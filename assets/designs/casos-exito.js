document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');
  const langBtn = document.getElementById('lang-btn');
  const langMenu = document.getElementById('lang-menu');

  // Menú hamburguesa
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('show');
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
      hamburger.classList.remove('active');
      navbar.classList.remove('show');
    }
  });

  // Selector de idioma
  langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    langMenu.style.display = langMenu.style.display === 'flex' ? 'none' : 'flex';
  });


  document.addEventListener('click', function (e) {
    if (!langMenu.contains(e.target) && e.target !== langBtn) {
      langMenu.style.display = 'none';
    }
  });
});
