// Add scroll animation to sections
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animate");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, {
    threshold: 0.1
  });

  animatedElements.forEach(el => observer.observe(el));

  // Gallery image alert
  const galleryImages = document.querySelectorAll(".image-grid img");
  galleryImages.forEach(img => {
    img.addEventListener("click", () => {
      alert(`You clicked on: ${img.alt}`);
    });
  });
});