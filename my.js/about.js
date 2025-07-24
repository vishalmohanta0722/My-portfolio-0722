// Profile image upload preview
document.addEventListener("DOMContentLoaded", function () {
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

  // Animate highlights
  const highlights = document.querySelectorAll('.about-highlights li');
  highlights.forEach((li, i) => {
    setTimeout(() => {
      li.classList.add('visible');
    }, 400 + i * 180);
  });

  // Animate tech icons
  const techIcons = document.querySelectorAll('.about-tech-icon');
  techIcons.forEach((icon, i) => {
    setTimeout(() => {
      icon.classList.add('visible');
    }, 800 + i * 120);
  });

  // Animate timeline
  const timelineItems = document.querySelectorAll('.timeline-list li');
  timelineItems.forEach((item, i) => {
    setTimeout(() => {
      item.classList.add('visible');
    }, 1200 + i * 180);
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // Animate skills in sequence
  const skills = document.querySelectorAll('.about-skill');
  skills.forEach((skill, i) => {
    setTimeout(() => {
      skill.classList.add('animated');
    }, 400 + i * 120);
  });
});

// Animate skill bars when in viewport ,new skill cards //
function animateSkillBars() {
  document.querySelectorAll('.skill-bar-fill').forEach(bar => {
    const percent = bar.getAttribute('data-percent');
    const barTop = bar.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (barTop < windowHeight - 40) {
      bar.style.width = percent + '%';
    }
  });
}
window.addEventListener('scroll', animateSkillBars);
window.addEventListener('DOMContentLoaded', animateSkillBars);

// Fade-in animation for the experience quote
function revealExperienceQuote() {
  const quote = document.querySelector('.about-experience-quote');
  if (!quote) return;
  const quoteTop = quote.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  if (quoteTop < windowHeight - 40) {
    quote.classList.add('visible');
  }
}
window.addEventListener('scroll', revealExperienceQuote);
window.addEventListener('DOMContentLoaded', revealExperienceQuote);

// hamburger menu toggle


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


// ...existing code...

// Animate glass cards on scroll
document.addEventListener('DOMContentLoaded', function() {
  const cards = document.querySelectorAll('.tech-glass-card');
  const revealCards = () => {
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if(rect.top < window.innerHeight - 60) {
        card.classList.add('tech-glass-card-visible');
      }
    });
  };
  window.addEventListener('scroll', revealCards);
  revealCards();
});

// Add this CSS to about.css for fade-in effect
/*
.tech-glass-card {
  opacity: 0;
  transform: translateY(30px) scale(0.98);
  transition: opacity 0.6s cubic-bezier(.4,0,.2,1), transform 0.6s cubic-bezier(.4,0,.2,1);
}
.tech-glass-card.tech-glass-card-visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}
*/