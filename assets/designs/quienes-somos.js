document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const scrollAmount = 300; // Cantidad de desplazamiento por clic

  // 🎠 Movimiento del carrusel
  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    navbar.style.display = "flex";
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    navbar.style.display = "flex";
  });

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

  // ⌨️ Cerrar con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      navbar.classList.remove("navbar-open");
      langMenu.style.display = "none";
    }
  });

  // 🌐 Selector de idioma
  const langBtn = document.getElementById("lang-btn");
  const langMenu = document.getElementById("lang-menu");

  if (langBtn && langMenu) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // Prevenir cierre inmediato
      langMenu.style.display = langMenu.style.display === "flex" ? "none" : "flex";
    });

    // (opcional) Cierra el menú si haces clic fuera
    document.addEventListener("click", (e) => {
      if (!langMenu.contains(e.target) && !langBtn.contains(e.target)) {
        langMenu.style.display = "none";
      }
    });
  }
});
