document.addEventListener("DOMContentLoaded", () => {
      const slides = document.querySelectorAll("#slider-local .slide");
      if (!slides.length) return;
      let current = 0;
      slides[current].classList.add("active");
      setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
      }, 4500);
    });