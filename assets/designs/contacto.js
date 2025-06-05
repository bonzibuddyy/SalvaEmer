document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("public_XXXXXXX"); // ← actualiza con tu clave real

  const form = document.getElementById("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs
        .sendForm("default_service", "template_s1t5y3o", this)
        .then(() => {
          alert("Formulario enviado con éxito. ¡Gracias por contactarnos!");
          form.reset();
        })
        .catch((error) => {
          console.error("Error al enviar:", error);
          alert("Error al enviar el formulario. Intenta más tarde.");
        });
    });
  }

  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  if (hamburger && navbar) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navbar.classList.toggle("show");
    });

    document.addEventListener("click", (e) => {
      if (!hamburger.contains(e.target) && !navbar.contains(e.target)) {
        hamburger.classList.remove("active");
        navbar.classList.remove("show");
      }
    });
  }

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
