// Contact form validation and feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');
    let valid = true;

    // Remove previous error styles
    [name, email, message].forEach(input => {
        input.style.borderColor = '#e5e7eb';
    });

    // Simple validation
    [name, email, message].forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = '#ef4444';
            valid = false;
        }
    });

    // Email format check
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (!emailPattern.test(email.value)) {
        email.style.borderColor = '#ef4444';
        valid = false;
    }

    if (valid) {
        document.getElementById('formMsg').style.display = 'block';
        this.reset();
        setTimeout(() => {
            document.getElementById('formMsg').style.display = 'none';
        }, 3000);
    }
});
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