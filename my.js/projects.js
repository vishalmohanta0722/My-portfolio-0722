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

  // Dark mode toggle
  const darkToggle = document.getElementById('darkToggle');
  darkToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark');
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
  });
  // Persist dark mode
  if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark');
  }

  // Animate project cards on scroll
  const cards = document.querySelectorAll('.project-card');
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

  // Filtering
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');
      cards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-tech').includes(filter)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});


// ...existing code... adding quote js

// Rotating project quotes
document.addEventListener('DOMContentLoaded', function () {
  const quotes = [
    "“Code is like humor. When you have to explain it, it’s bad.” – Cory House",
    "“First, solve the problem. Then, write the code.” – John Johnson",
    "“Simplicity is the soul of efficiency.” – Austin Freeman",
    "“Great web projects are built one pixel at a time.”",
    "“Creativity is intelligence having fun.” – Albert Einstein",
    "“Design is not just what it looks like and feels like. Design is how it works.” – Steve Jobs"
  ];
  const quoteElem = document.getElementById('projectQuote');
  let idx = 0;

  function showQuote(i) {
    quoteElem.style.opacity = 5;
    setTimeout(() => {
      quoteElem.textContent = quotes[i];
      quoteElem.style.opacity = 5;
      quoteElem.classList.remove('fade');
      void quoteElem.offsetWidth; // trigger reflow for animation
      quoteElem.classList.add('fade');
    }, 400);
  }

  showQuote(idx);
  setInterval(() => {
    idx = (idx + 1) % quotes.length;
    showQuote(idx);
  }, 4000);
});

// ...existing code...

// ...existing code...

// Filter interactivity and smooth fade for project cards adding filteration js 
document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      // Highlight active button
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.getAttribute('data-filter');

      // Fade out all cards first
      cards.forEach(card => {
        card.classList.add('hide');
      });

      // After fade out, show only filtered cards with fade in
      setTimeout(() => {
        cards.forEach(card => {
          const tech = card.getAttribute('data-tech') || '';
          if (filter === 'all' || tech.toLowerCase().includes(filter.toLowerCase())) {
            card.style.display = '';
            setTimeout(() => card.classList.remove('hide'), 30); // fade in
          } else {
            card.style.display = 'none';
          }
        });
      }, 350); // matches CSS transition duration
    });
  });
});

// adding code for search //
// ...existing code...

document.addEventListener('DOMContentLoaded', function () {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.project-card');
  const searchInput = document.getElementById('projectSearch');
  const noResults = document.getElementById('noResults');
  let currentFilter = 'all';

  function filterAndSearch() {
    const search = (searchInput.value || '').trim().toLowerCase();
    let visibleCount = 0;
    cards.forEach(card => {
      const tech = card.getAttribute('data-tech').toLowerCase();
      const title = card.querySelector('.project-title').textContent.toLowerCase();
      const matchesFilter = currentFilter === 'all' || tech.includes(currentFilter);
      const matchesSearch = !search || title.includes(search);
      if (matchesFilter && matchesSearch) {
        card.style.display = '';
        visibleCount++;
        setTimeout(() => card.classList.remove('hide'), 10);
      } else {
        card.classList.add('hide');
        setTimeout(() => card.style.display = 'none', 350);
      }
    });
    noResults.style.display = visibleCount === 0 ? 'block' : 'none';
  }

  filterBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentFilter = btn.getAttribute('data-filter').toLowerCase();
      filterAndSearch();
    });
  });

  searchInput.addEventListener('input', filterAndSearch);

  // Initial call
  filterAndSearch();
});