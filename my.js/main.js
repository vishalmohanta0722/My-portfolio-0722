// Contact form validation and feedback
// Fade-in animation for contact logo hero section
document.addEventListener('DOMContentLoaded', function() {
  const logoHero = document.querySelector('.contact-logo-hero');
  if (logoHero) {
    logoHero.style.opacity = 0;
    logoHero.style.transform = 'translateY(-30px)';
    setTimeout(() => {
      logoHero.style.transition = 'opacity 0.8s cubic-bezier(.4,0,.2,1), transform 0.8s cubic-bezier(.4,0,.2,1)';
      logoHero.style.opacity = 1;
      logoHero.style.transform = 'translateY(0)';
    }, 200);
  }
});

    // Fade-in animation for contact cards
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.contact-card');
  const revealCards = () => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if(rect.top < window.innerHeight - 60) {
        card.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', revealCards);
  revealCards();
});

// Add this to your CSS for fade-in effect:
/*
.contact-card {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
  transition: opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1);
}
.contact-card.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}
*/

// footer section

// Footer animation (optional: scroll to top on click)
document.querySelector('.main-footer').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});


// changes in hero section profile image on hover
// Rotating hero quotes
const quotes = [
    "Code is like humor. When you have to explain it, it’s bad.",
    "First, solve the problem. Then, write the code.",
    "Simplicity is the soul of efficiency.",
    "Great web experiences are built, not bought.",
    "Creativity is intelligence having fun.",
    "Design is not just what it looks like and feels like. Design is how it works."
];
let quoteIndex = 0;
const quoteEl = document.getElementById('heroQuote');
if (quoteEl) {
    setInterval(() => {
        quoteIndex = (quoteIndex + 1) % quotes.length;
        quoteEl.style.opacity = 0;
        setTimeout(() => {
            quoteEl.textContent = `"${quotes[quoteIndex]}"`;
            quoteEl.style.opacity = 0.92;
        }, 400);
    }, 3500);
}
// changes in index about section
// ...existing code...

// Animate About Me section on scroll (optional)
const aboutCards = document.querySelectorAll('.about-card-glass, .about-skills-glass');
const aboutObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('animate__fadeInUp');
        }
    });
}, { threshold: 0.2 });

aboutCards.forEach(card => {
    aboutObserver.observe(card);
});

// project section in index
// ...existing code...

// Optional: Add keyboard accessibility for flip cards
document.querySelectorAll('.project-flip-card').forEach(card => {
    card.tabIndex = 0;
    card.addEventListener('keydown', e => {
        if (e.key === 'Enter' || e.key === ' ') {
            card.querySelector('.project-flip-inner').classList.toggle('flipped');
        }
    });
});


// about image section // 
// ...existing code...
document.addEventListener("DOMContentLoaded", function () {
  // About image upload preview
  const aboutImgUpload = document.getElementById('aboutImgUpload');
  const aboutProfileImg = document.getElementById('aboutProfileImg');
  if (aboutImgUpload && aboutProfileImg) {
    aboutImgUpload.addEventListener('change', function (e) {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = function (evt) {
          aboutProfileImg.src = evt.target.result;
        };
        reader.readAsDataURL(file);
      }
    });
  }
});

// Hamburger menu toggle for mobile/tablet
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');

  // Toggle navbar open/close on hamburger click
  hamburger.addEventListener('click', function () {
    navbar.classList.toggle('open');
    hamburger.classList.toggle('is-active');
  });

  // Optional: Close navbar when a link is clicked (on mobile)
  navbar.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function () {
      if (window.innerWidth <= 900) {
        navbar.classList.remove('open');
        hamburger.classList.remove('is-active');
      }
    });
  });

  // Optional: Close navbar if window is resized to desktop
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) {
      navbar.classList.remove('open');
      hamburger.classList.remove('is-active');
    }
  });
});


//services section//
// Fade-in animation for home service cards
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.home-service-card');
  const revealCards = () => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if(rect.top < window.innerHeight - 60) {
        card.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', revealCards);
  revealCards();
});