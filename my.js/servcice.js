// Hamburger menu for mobile
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');
  if (hamburger && navbar) {
    hamburger.addEventListener('click', function () {
      navbar.classList.toggle('open');
      hamburger.classList.toggle('is-active');
    });
    navbar.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function () {
        if (window.innerWidth <= 900) {
          navbar.classList.remove('open');
          hamburger.classList.remove('is-active');
        }
      });
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth > 900) {
        navbar.classList.remove('open');
        hamburger.classList.remove('is-active');
      }
    });
  }

  // Animate service cards on scroll
  const cards = document.querySelectorAll('.service-card');
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  cards.forEach(card => observer.observe(card));
});

// ...existing code...

// Fade-in animation for service image section
document.addEventListener('DOMContentLoaded', function() {
  const serviceGlass = document.querySelector('.service-image-glass');
  if (serviceGlass) {
    const reveal = () => {
      const rect = serviceGlass.getBoundingClientRect();
      if(rect.top < window.innerHeight - 60) {
        serviceGlass.classList.add('visible');
        window.removeEventListener('scroll', reveal);
      }
    };
    window.addEventListener('scroll', reveal);
    reveal();
  }
});