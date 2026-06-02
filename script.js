const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-nav]");
const revealItems = document.querySelectorAll(".reveal");

// Keep the fixed header quiet at the top and more legible while scrolling.
function updateHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
}

// Mobile navigation closes after a section jump to keep the page focused.
function closeMenu() {
  menuToggle.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  nav.classList.remove("is-open");
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.classList.toggle("is-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  nav.classList.toggle("is-open", isOpen);
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMenu();
  }
});

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// Lightweight reveal animation that avoids constant scroll work.
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.18,
    rootMargin: "0px 0px -8% 0px",
  }
);

revealItems.forEach((item) => observer.observe(item));
