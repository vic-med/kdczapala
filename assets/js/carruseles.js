    document.addEventListener("DOMContentLoaded", function () {
      document.querySelectorAll(".carrusel-categoria").forEach(carrusel => {
        const items = Array.from(carrusel.children);
        items.forEach(item => {
          const clone = item.cloneNode(true);
          clone.classList.add("clone");
          carrusel.appendChild(clone);
        });    
        let itemWidth = items[0].offsetWidth + 16; 
        carrusel.addEventListener("scroll", function () {
          if (carrusel.scrollLeft >= carrusel.scrollWidth / 2) {
            carrusel.scrollLeft = 0; // salta al inicio
          }
        });
        window.addEventListener("resize", () => {
          itemWidth = items[0].offsetWidth + 16;
        });
      });
    });
