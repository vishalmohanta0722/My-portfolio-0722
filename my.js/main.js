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
// Reveal footer sections when visible
document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector(".main-footer");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        footer.querySelectorAll(".footer-brand, .footer-links, .footer-contact")
          .forEach(el => el.classList.add("footer-visible"));
      }
    });
  }, { threshold: 0.2 });

  observer.observe(footer);
});

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for footer links
    document.querySelectorAll('.footer-links a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Social links hover effect
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('mouseenter', () => {
            icon.style.transform = 'translateY(-5px) rotate(5deg)';
        });

        icon.addEventListener('mouseleave', () => {
            icon.style.transform = 'translateY(0) rotate(0)';
        });
    });

    // Copy email on click
    const emailElement = document.querySelector('.footer-contact span:nth-child(2)');
    if (emailElement) {
        emailElement.style.cursor = 'pointer';
        emailElement.setAttribute('title', 'Click to copy email');
        
        emailElement.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(emailElement.textContent);
                showToast('Email copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy email:', err);
            }
        });
    }
});

// Toast notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #6366f1;
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        animation: slideIn 0.3s ease forwards;
        z-index: 1000;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
// changes in index about section
// Project Cards Interactivity and Animation
document.addEventListener('DOMContentLoaded', function() {
    const projectCards = document.querySelectorAll('.project-card');

    // Add hover effect
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-10px)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Add scroll reveal animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    projectCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        card.style.transitionDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Add click tracking
    document.querySelectorAll('.project-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const projectCard = e.target.closest('.project-card');
            const projectName = projectCard.dataset.project;
            console.log(`Project clicked: ${projectName}`);
        });
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
    // Service Cards Animation
    const serviceCards = document.querySelectorAll('.service-card');
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Initialize service cards
    serviceCards.forEach((card, index) => {
        // Set initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        // Add transition
        card.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
        
        // Add delay based on index
        card.style.transitionDelay = `${index * 0.1}s`;
        
        // Observe card
        observer.observe(card);

        // Mouse move effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-10px)
            `;
        });

        // Reset on mouse leave
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });
});

// resume section //
document.addEventListener('DOMContentLoaded', function() {
    // Track resume interactions
    const viewBtn = document.querySelector('.view-btn');
    const downloadBtn = document.querySelector('.download-btn');

    if (viewBtn) {
        viewBtn.addEventListener('click', function() {
            console.log('Resume viewed');
            // Add your analytics tracking here
        });
    }

    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            console.log('Resume downloaded');
            
            // Show success message
            const toast = document.createElement('div');
            toast.className = 'download-toast';
            toast.textContent = 'Resume download started!';
            toast.style.cssText = `
                position: fixed;
                bottom: 20px;
                right: 20px;
                background: #10B981;
                color: white;
                padding: 1rem 2rem;
                border-radius: 50px;
                animation: slideIn 0.3s ease forwards;
                z-index: 1000;
            `;
            
            document.body.appendChild(toast);
            
            setTimeout(() => {
                toast.style.animation = 'slideOut 0.3s ease forwards';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        });
    }
});

// Add these animations to your CSS
document.head.insertAdjacentHTML('beforeend', `
    <style>
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    </style>
`);

document.addEventListener('DOMContentLoaded', function() {
    // Contact card hover effects
    const contactCards = document.querySelectorAll('.contact-card');
    
    contactCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            card.style.transform = `
                perspective(1000px)
                rotateX(${rotateX}deg)
                rotateY(${rotateY}deg)
                translateY(-10px)
            `;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.transition = 'all 0.5s ease';
        });
    });

    // Track contact interactions
    const contactButtons = document.querySelectorAll('.contact-btn');
    contactButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const type = btn.textContent.trim();
            console.log(`Contact interaction: ${type}`);
            // Add your analytics tracking here
        });
    });

    // Copy email to clipboard functionality
    const emailValue = document.querySelector('.contact-value');
    if (emailValue && emailValue.textContent.includes('@')) {
        emailValue.style.cursor = 'pointer';
        emailValue.setAttribute('title', 'Click to copy email');
        
        emailValue.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(emailValue.textContent);
                showToast('Email copied to clipboard!');
            } catch (err) {
                console.error('Failed to copy email:', err);
            }
        });
    }
});

// Toast notification function
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: #6366f1;
        color: white;
        padding: 1rem 2rem;
        border-radius: 50px;
        box-shadow: 0 4px 15px rgba(99, 102, 241, 0.3);
        animation: slideIn 0.3s ease forwards;
        z-index: 1000;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}
// social links//
// Social Links Animation
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        // Add hover animations
        link.addEventListener('mouseenter', function() {
            // Scale up and add glow effect
            this.style.transform = 'translateY(-5px) scale(1.1)';
            this.style.boxShadow = '0 5px 15px rgba(99, 102, 241, 0.4)';
            
            // Rotate icon slightly
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'rotate(8deg) scale(1.2)';
            }
        });

        link.addEventListener('mouseleave', function() {
            // Reset to original state
            this.style.transform = 'translateY(0) scale(1)';
            this.style.boxShadow = 'none';
            
            const icon = this.querySelector('i');
            if (icon) {
                icon.style.transform = 'rotate(0) scale(1)';
            }
        });

        // Add click effect
        link.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 100);
        });
    });
});

// Add these styles to your CSS file