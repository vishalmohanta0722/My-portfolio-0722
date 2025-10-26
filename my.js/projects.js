document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.project-card');

  // Animate project cards on scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  cards.forEach(card => observer.observe(card));

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const navbar = document.getElementById('navbar');
  if(hamburger && navbar){
    hamburger.addEventListener('click', () => {
      navbar.classList.toggle('open');
      hamburger.classList.toggle('is-active');
    });
    navbar.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        if(window.innerWidth <= 900){
          navbar.classList.remove('open');
          hamburger.classList.remove('is-active');
        }
      });
    });
  }

  // Animate hero stats
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

    // Reveal on scroll
    const revealElements = document.querySelectorAll('.reveal');
    const revealOnScroll = () => {
      const windowHeight = window.innerHeight;
      revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        if(elementTop < windowHeight - 100) el.classList.add('active');
      });
    }
    window.addEventListener('scroll', revealOnScroll);
    window.addEventListener('load', revealOnScroll);
  
// ===== FEATURED PROJECT ANIMATION =====
// Reveal animation on scroll
window.addEventListener('scroll', () => {
  const section = document.querySelector('.featured-project');
  const sectionTop = section.getBoundingClientRect().top;
  const triggerPoint = window.innerHeight * 0.8;

  if (sectionTop < triggerPoint) {
    section.classList.add('visible');
  }
});
