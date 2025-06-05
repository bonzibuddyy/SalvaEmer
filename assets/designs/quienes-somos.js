document.addEventListener("DOMContentLoaded", () => {
  const carousel = document.getElementById("carousel");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const navbar = document.getElementById("navbar");
  const hamburger = document.getElementById("hamburger");
  const langBtn = document.getElementById("lang-btn");
  const langMenu = document.getElementById("lang-menu");
  const scrollAmount = 300;

  // 🎠 Movimiento del carrusel
  nextBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });

  prevBtn.addEventListener("click", () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
  });

  // 🍔 Menú hamburguesa
  hamburger.addEventListener('click', (e) => {
    e.stopPropagation(); // evitar que el evento se propague
    hamburger.classList.toggle('active');
    navbar.classList.toggle('show');
    langMenu.style.display = "none"; // cierra el menú de idioma si está abierto
  });

  // 🌐 Selector de idioma
  if (langBtn && langMenu) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation(); // evitar cierre inmediato
      langMenu.style.display = langMenu.style.display === "flex" ? "none" : "flex";
      navbar.classList.remove('show'); // cierra el menú hamburguesa si está abierto
      hamburger.classList.remove('active');
    });
  }

  // 📦 Cierre general al hacer clic fuera
  document.addEventListener('click', (e) => {
    if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
      navbar.classList.remove('show');
      hamburger.classList.remove('active');
    }
    if (!langMenu.contains(e.target) && !langBtn.contains(e.target)) {
      langMenu.style.display = "none";
    }
  });

  // ⌨️ Cerrar con Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      navbar.classList.remove("show");
      hamburger.classList.remove("active");
      langMenu.style.display = "none";
    }
  });
});
