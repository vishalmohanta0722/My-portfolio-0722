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