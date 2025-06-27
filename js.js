  window.addEventListener('scroll', function () {
    const header = document.querySelector('.header-section');
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  window.addEventListener("DOMContentLoaded", () => {
    const scrollBtn = document.getElementById("scrollTopBtn");
    const contactSection = document.getElementById("contact");

    function isInViewport(elem) {
      const rect = elem.getBoundingClientRect();
      return (
        rect.top < window.innerHeight &&
        rect.bottom > 0
      );
    }

    function toggleScrollButton() {
      if (isInViewport(contactSection)) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    }

    toggleScrollButton();
    window.addEventListener("scroll", toggleScrollButton);
    window.addEventListener("resize", toggleScrollButton);
  });