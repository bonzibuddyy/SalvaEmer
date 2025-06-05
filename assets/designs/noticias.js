document.addEventListener("DOMContentLoaded", () => {
  const seccionesAnimadas = document.querySelectorAll(".introduccion, .noticia");
  const botonTop = document.createElement("button");
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  // Observador para mostrar contenido al hacer scroll
  const observer = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add("aparecer");
        observer.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.1 });

  seccionesAnimadas.forEach(seccion => {
    seccion.classList.add("oculto");
    observer.observe(seccion);
  });

  // Efecto de escritura
  const titulo = document.querySelector("h1");
  if (titulo) {
    const texto = titulo.textContent;
    titulo.textContent = "";
    let i = 0;
    const escribir = () => {
      if (i < texto.length) {
        titulo.textContent += texto.charAt(i);
        i++;
        setTimeout(escribir, 70);
      }
    };
    escribir();
  }

  // Botón volver arriba
  botonTop.textContent = "↑";
  botonTop.className = "btn-top";
  document.body.appendChild(botonTop);

  botonTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    botonTop.classList.toggle("visible", window.scrollY > 200);
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

  // Selector de idioma
  const langBtn = document.getElementById("lang-btn");
  const langMenu = document.getElementById("lang-menu");

  if (langBtn && langMenu) {
    langBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      langMenu.style.display = langMenu.style.display === "flex" ? "none" : "flex";
    });

    document.addEventListener("click", (e) => {
      if (!langMenu.contains(e.target) && !langBtn.contains(e.target)) {
        langMenu.style.display = "none";
      }
    });
  }
});
