// Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Scroll to Top
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Reveal Animations
const revealElements = document.querySelectorAll(
  ".section-title, .section-subtitle, .card, .value-card, .resume-card"
);

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 50) {
      el.classList.add("reveal");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

//Navbar
const navLinks = document.querySelectorAll('.nav-links a');

  // Highlight on click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // Optional: Highlight while scrolling (active section)
  window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 100; // offset for navbar height

    navLinks.forEach(link => {
      let section = document.querySelector(link.getAttribute('href'));
      if (
        section.offsetTop <= fromTop &&
        section.offsetTop + section.offsetHeight > fromTop
      ) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });


    // For Revisiting
    
//   // Smooth scroll on click
// navLinks.forEach(link => {
//   link.addEventListener('click', (e) => {
//     e.preventDefault(); // stop default jump
//     const target = document.querySelector(link.getAttribute('href'));
//     if (target) {
//       window.scrollTo({
//         top: target.offsetTop - 70, // offset for navbar height
//         behavior: "smooth"
//       });
//     }
//     navLinks.forEach(l => l.classList.remove('active'));
//     link.classList.add('active');
//   });
// });
