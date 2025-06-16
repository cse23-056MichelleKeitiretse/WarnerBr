// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.menu-list-item a');

  for (const link of links) {
    link.addEventListener('click', smoothScroll);
  }

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // For external or page links, follow default behavior
      window.location.href = targetId;
    }
  }
});

// Optional: Add simple fade-in animation for images on scroll
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.image-container img');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  images.forEach(img => {
    observer.observe(img);
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const menuList = document.querySelector('.menu-list');

  menuToggle.addEventListener('click', function () {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
    menuToggle.setAttribute('aria-expanded', !expanded);
    menuList.classList.toggle('open');
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const movieButtons = document.querySelectorAll('.movie-button');
  movieButtons.forEach(button => {
  button.setAttribute('aria-expanded', 'false');
  button.addEventListener('click', () => {
  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!expanded));
  });
  });
  });