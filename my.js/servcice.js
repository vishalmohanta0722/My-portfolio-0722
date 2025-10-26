// Scroll reveal & Hero parallax
window.addEventListener("scroll", () => {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) {
      el.classList.add("active");
    }
  });

  // Hero parallax
  const hero = document.querySelector(".services-hero");
  if (hero) {
    let scrollPos = window.scrollY;
    hero.style.backgroundPosition = `center ${scrollPos * 0.5}px`;
  }
});

// 3D Tilt effect for service cards
const cards = document.querySelectorAll(".service-card");

cards.forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
    const rotateY = ((x - centerX) / centerX) * 10;
    card.style.setProperty("--rotateX", `${-rotateX}deg`);
    card.style.setProperty("--rotateY", `${rotateY}deg`);
  });

  card.addEventListener("mouseleave", () => {
    card.style.setProperty("--rotateX", `0deg`);
    card.style.setProperty("--rotateY", `0deg`);
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const stats = document.querySelectorAll('.stat-number');
  stats.forEach(stat => {
    let value = parseInt(stat.textContent);
    let current = 0;
    const increment = Math.ceil(value / 30);
    const timer = setInterval(() => {
      current += increment;
      if(current >= value){
        stat.textContent = value + '+';
        clearInterval(timer);
      } else {
        stat.textContent = current + '+';
      }
    }, 40);
  });
});

// hero services//
// === Simple Parallax Scroll Effect ===
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.services-hero::before');
  const scrollY = window.scrollY * 0.4;
  document.querySelector('.services-hero').style.backgroundPositionY = `${scrollY}px`;
});


//image and details section// 
// Simple fade-in animation for service section
const serviceSection = document.querySelector('.service-section');

window.addEventListener('scroll', () => {
  const sectionPos = serviceSection.getBoundingClientRect().top;
  const screenPos = window.innerHeight / 1.2;

  if (sectionPos < screenPos) {
    serviceSection.style.opacity = 1;
    serviceSection.style.transform = 'translateY(0)';
    serviceSection.style.transition = 'all 1s ease';
  }
});

// Initial state
serviceSection.style.opacity = 0;
serviceSection.style.transform = 'translateY(50px)';
