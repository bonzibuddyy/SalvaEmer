document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  // Menú hamburguesa
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('show');
  });

  // Ocultar menú al hacer clic en un enlace
  const enlaces = navbar.querySelectorAll("a");
  enlaces.forEach((enlace) => {
    enlace.addEventListener("click", () => {
      hamburger.classList.remove('active');
      navbar.classList.remove("show");
    });
  });

  // Cerrar menú al hacer clic fuera
  document.addEventListener('click', function (e) {
    if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
      hamburger.classList.remove('active');
      navbar.classList.remove('show');
    }
  });

  // Selector de idioma
  const langBtn = document.getElementById("lang-btn");
  const langMenu = document.getElementById("lang-menu");

  if (langBtn && langMenu) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const visible = langMenu.style.display === "flex";
      langMenu.style.display = visible ? "none" : "flex";
    });

    document.addEventListener("click", (e) => {
      if (!langMenu.contains(e.target) && !langBtn.contains(e.target)) {
        langMenu.style.display = "none";
      }
    });
  }
});
