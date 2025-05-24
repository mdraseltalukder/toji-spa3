document.addEventListener("DOMContentLoaded", function () {
  const carouselContainer = document.querySelector(".carousel-container");
  const testimonialGroups = document.querySelectorAll(".testimonial-group");
  const indicators = document.querySelectorAll(".indicator");

  const totalItems = testimonialGroups.length;
  let currentIndex = 0;
  const autoplayInterval = 5000;
  let autoplayTimer;

  // Dynamic container width
  carouselContainer.style.width = `${totalItems * 100}%`;

  // Each item takes equal width
  testimonialGroups.forEach((item) => {
    item.style.width = `${100 / totalItems}%`;
  });

  function showSlide(index) {
    currentIndex = index;

    if (currentIndex >= totalItems) {
      currentIndex = 0;
    } else if (currentIndex < 0) {
      currentIndex = totalItems - 1;
    }

    const translateValue = -currentIndex * (100 / totalItems) + "%";
    carouselContainer.style.transform = `translateX(${translateValue})`;

    indicators.forEach((indicator, i) => {
      indicator.classList.toggle("active", i === currentIndex);
    });
  }

  function startAutoplay() {
    autoplayTimer = setInterval(() => {
      showSlide(currentIndex + 1);
    }, autoplayInterval);
  }

  function stopAutoplay() {
    clearInterval(autoplayTimer);
  }

  startAutoplay();

  indicators.forEach((indicator) => {
    indicator.addEventListener("click", () => {
      const index = parseInt(indicator.getAttribute("data-index"));
      showSlide(index);
      stopAutoplay();
      startAutoplay();
    });
  });

  document
    .querySelector(".testimonials-carousel")
    .addEventListener("mouseenter", stopAutoplay);
  document
    .querySelector(".testimonials-carousel")
    .addEventListener("mouseleave", startAutoplay);
});
