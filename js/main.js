document.body.classList.add('dark-mode');

// Theme Toggle Functionality
function initTheme() {
  const themeToggle = document.getElementById('theme-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const storedTheme = localStorage.getItem('theme');

  // Apply stored or preferred theme
  if (storedTheme === 'dark') {
    document.body.classList.add('dark-mode');
  } else if (storedTheme === 'light') {
    document.body.classList.remove('dark-mode');
  } else {
    // No preference stored, use system preference
    document.body.classList.toggle('dark-mode', prefersDark);
  }

  // Toggle theme on button click
  themeToggle.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  });
}

// Project Filtering
function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterButtons.length && projectCards.length) {
    filterButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach((btn) => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter projects
        const filter = button.getAttribute('data-filter');
        projectCards.forEach((card) => {
          if (
            filter === 'all' ||
            card.getAttribute('data-category') === filter
          ) {
            card.style.display = 'block';
            setTimeout(() => {
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            }, 10);
          } else {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            setTimeout(() => {
              card.style.display = 'none';
            }, 300);
          }
        });
      });
    });
  }
}

// Smooth Scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });
}

// Navbar Scroll Effect
function initNavbarScroll() {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add/remove background when scrolling
    if (currentScroll > 50) {
      navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    } else {
      navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
  });
}

// Initialize all functionality
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initProjectFilter();
  initSmoothScroll();
  initNavbarScroll();
});

function project(event) {
  console.log(event);
  var target = event.target;
  while (true) {
    try {
      if (target.classList.contains('project-card')) {
        break;
      }
    } catch {
      console.log('Found no classList in ' + target);
      break;
    }
    var target = target.parentElement;
  }
  console.log(target.dataset.url);
  open('https://' + target.dataset.url);
}
