document.addEventListener("DOMContentLoaded", () => {
  emailjs.init("user_TuUserIDDeEmailJS"); // Reemplaza con tu ID real

  const form = document.querySelector("#form");
  const langBtn = document.getElementById("lang-btn");
  const langMenu = document.getElementById("lang-menu");
  const hamburger = document.getElementById("hamburger");
  const navbar = document.getElementById("navbar");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const message = document.querySelector("#message").value.trim();

    if (!name || !email.includes("@") || !message) {
      alert("Por favor, complete todos los campos correctamente.");
      return;
    }

    emailjs.send("default_service", "template_s1t5y3o", {
      user_name: name,
      user_email: email,
      message: message
    }).then(() => {
      alert("Formulario enviado con éxito. ¡Gracias por contactarnos!");
      form.reset();
    }).catch((error) => {
      alert("Error al enviar. Intente más tarde.");
      console.error(error);
    });
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
