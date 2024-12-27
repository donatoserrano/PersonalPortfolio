// Sticky Navbar
const navbar = document.querySelector("nav");

// Funzione per gestire il comportamento dellq navbar
function stickyNavbar() {
  if (window.scrollY >= navbar.offsetTop) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
window.addEventListener("scroll", stickyNavbar);

// Funzione per nascondere i testi (Home, About, ecc.) sui dispositivi mobili
function toggleNavbarText() {
  const navbarText = document.querySelectorAll(".nav-text");

  if (window.innerWidth <= 768) {
    navbarText.forEach((text) => {
      text.style.display = "none"; // Nasconde i testi su schermi piccoli
    });
  } else {
    navbarText.forEach((text) => {
      text.style.display = "inline-block"; // Mostra i testi su schermi grandi
    });
  }
}

// Esegui la funzione quando la pagina viene caricata e quando la finestra cambia dimensione
window.addEventListener("load", toggleNavbarText);
window.addEventListener("resize", toggleNavbarText);

// Scroll Animato per i Link della Navbar
const navbarLinks = document.querySelectorAll(".navbar a");

navbarLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - navbar.offsetHeight,
      behavior: "smooth",
    });
  });
});

// Verifica manuale dati immessi nel form
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

    let isValid = true;

    // Verifica per il nome (almeno 3 caratteri)
    if (name.trim().length < 3) {
      document.getElementById("name-error").textContent =
        "Name must be at least 3 characters long.";
      document.getElementById("name-error").classList.add("show");
      isValid = false;
    } else {
      document.getElementById("name-error").classList.remove("show");
    }

    // Verifica per la mail (formato email valido)
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
      document.getElementById("email-error").textContent =
        "Please enter a valid email address.";
      document.getElementById("email-error").classList.add("show");
      isValid = false;
    } else {
      document.getElementById("email-error").classList.remove("show");
    }

    // Verifica per il messaggio (almeno 3 caratteri)
    if (message.trim().length < 3) {
      document.getElementById("message-error").textContent =
        "Message must be at least 3 characters long.";
      document.getElementById("message-error").classList.add("show");
      isValid = false;
    } else {
      document.getElementById("message-error").classList.remove("show");
    }

    if (isValid) {
      alert("Form submitted successfully!");
    }
  });
