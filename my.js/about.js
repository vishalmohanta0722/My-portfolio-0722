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
document.addEventListener('DOMContentLoaded', function() {
    // Animate cards on scroll
    const cards = document.querySelectorAll('.about-card-glass');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('enhanced-card');
                entry.target.classList.add('animate__fadeInLeft');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2,
        rootMargin: '0px'
    });

    cards.forEach(card => {
        observer.observe(card);
    });

    // Add hover effect
    cards.forEach(card => {
        card.addEventListener('mousemove', function(e) {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const angleX = (y - centerY) / 20;
            const angleY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${angleX}deg) rotateY(${angleY}deg) translateY(-10px)`;
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
    });

    // Animate badges
    const badges = document.querySelectorAll('.about-badge');
    badges.forEach(badge => {
        badge.addEventListener('mouseover', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        badge.addEventListener('mouseout', function() {
            this.style.transform = 'translateY(0)';
        });
    });
});

// Add to your existing JavaScript
document.addEventListener('DOMContentLoaded', function() {
  // Animate work items on scroll
  const workItems = document.querySelectorAll('.work-item');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateX(0)';
      }
    });
  }, {
    threshold: 0.2
  });

  workItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-20px)';
    item.style.transition = `all 0.5s ease ${index * 0.2}s`;
    observer.observe(item);
  });
});

document.addEventListener('DOMContentLoaded', function() {
    // Animate intro content on load
    const introContent = document.querySelector('.intro-content');
    if (introContent) {
        setTimeout(() => {
            introContent.style.opacity = '1';
            introContent.style.transform = 'translateY(0)';
        }, 300);
    }

    // Animate tags with delay
    const tags = document.querySelectorAll('.tag');
    tags.forEach((tag, index) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
            tag.style.transition = 'all 0.5s ease';
        }, 500 + (index * 100));
    });

    // Optional: Add hover effect for the image
    const profileImg = document.querySelector('.about-profile-img');
    if (profileImg) {
        profileImg.addEventListener('mousemove', function(e) {
            const { left, top, width, height } = this.getBoundingClientRect();
            const x = (e.clientX - left) / width - 0.5;
            const y = (e.clientY - top) / height - 0.5;
            
            this.style.transform = `perspective(1000px) rotateY(${x * 10}deg) rotateX(${y * -10}deg)`;
        });

        profileImg.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateY(0) rotateX(0)';
        });
    }
});