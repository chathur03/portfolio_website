document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
  const revealNodes = document.querySelectorAll(".reveal");
  const sections = Array.from(document.querySelectorAll("main section[id]"));

  if (navToggle && nav) {
    navToggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.16, rootMargin: "0px 0px -40px 0px" }
  );

  revealNodes.forEach((node) => revealObserver.observe(node));

  const updateActiveLink = () => {
    const currentSection = sections.find((section) => {
      const rect = section.getBoundingClientRect();
      return rect.top <= 160 && rect.bottom >= 160;
    });

    navLinks.forEach((link) => {
      const isActive = currentSection && link.getAttribute("href") === `#${currentSection.id}`;
      link.classList.toggle("is-active", Boolean(isActive));
    });
  };

  updateActiveLink();
  document.addEventListener("scroll", updateActiveLink, { passive: true });
  window.addEventListener("resize", updateActiveLink);
});
