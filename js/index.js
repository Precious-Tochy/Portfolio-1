document.addEventListener("DOMContentLoaded", () => {

  //  Scroll effect (body + navbar)
  const navbar = document.getElementById("ral");

  window.addEventListener("scroll", () => {
    const scrolled = window.scrollY > 0;

    document.body.classList.toggle("scrolled", scrolled);

    if (navbar) {
      navbar.classList.toggle("scrolled", scrolled);
    }
  });

  //  Intersection Observer (for animations)
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle("visible", entry.isIntersecting);
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.slide-in, .good-in').forEach(el => {
    observer.observe(el);
  });

  //  Slider
  const track = document.getElementById('track');
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  if (track && prev && next) {
    const cardWidth = 620; // width + gap
    const visibleCards = 3;
    const totalCards = track.children.length;
    const maxIndex = totalCards - visibleCards;

    let index = 0;

    function updateSlider() {
      track.style.transform = `translateX(${-index * cardWidth}px)`;
    }

    next.addEventListener('click', () => {
      index = (index + 1) > maxIndex ? 0 : index + 1;
      updateSlider();
    });

    prev.addEventListener('click', () => {
      index = (index - 1) < 0 ? maxIndex : index - 1;
      updateSlider();
    });
  }

  //  Accordion
  const items = document.querySelectorAll('.accordion-item');

  items.forEach(item => {
    const header = item.querySelector('.accordion-header');
    if (header) {
      header.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    }
  });

});

//  Email submission (outside DOMContentLoaded so it can be used globally)
function submitEmail() {
  const email = document.getElementById("emailInput").value.trim();

  if (email && email.includes("@")) {
    alert(`Email submitted: ${email}`);
  } else {
    alert("Please enter a valid email address.");
  }
}