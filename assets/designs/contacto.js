document.addEventListener("DOMContentLoaded", () => {
  // Inicializa EmailJS con tu clave pública
  emailjs.init("6atX1sYqf2gCnelAV"); // ← Reemplaza con tu clave real

  const form = document.getElementById("form");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();

      // Obtén los valores del formulario
      const formData = {
        user_name: form.user_name.value,
        user_email: form.user_email.value,
        message: form.message.value,
      };

      // Enviar con send (más confiable que sendForm)
      emailjs
        .send("service_3m44st5", "template_zet7ace", formData)
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

  // Botón de menú hamburguesa
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
