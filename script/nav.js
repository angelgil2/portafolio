const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    const targetSection = document.getElementById(link.hash.substring(1));

    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        duration: 5000, // Duración en milisegundos (1000 = 1 segundo)
        easing: 'ease-in-out',
      });
    }
  });
});


