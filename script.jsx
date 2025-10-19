document.addEventListener('DOMContentLoaded', () => {
  /* ===== Smooth Scrolling ===== */
  const navLinks = document.querySelectorAll('header nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    document.getElementById(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  }

  /* ===== Theme Toggle ===== */
  const toggleButton = document.getElementById('theme-toggle');
  const body = document.body;

  // Load saved preference
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'light') {
    body.classList.add('light-mode');
    if (toggleButton) toggleButton.textContent = '🌞';
  } else {
    if (toggleButton) toggleButton.textContent = '🌙';
  }

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      const isLight = body.classList.contains('light-mode');
      toggleButton.textContent = isLight ? '🌞' : '🌙';
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });
  }
});
