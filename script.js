// Funcție de întoarcere la homepage (cu efect de sclipire pe logo)
function goHome() {
  const logo = document.querySelector('.logo');
  logo.classList.add('clicked');
  setTimeout(() => logo.classList.remove('clicked'), 600);

  // Scroll sus
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  console.log("Navighează la homepage.");
}

// Navigare între secțiuni (cu efect de highlight)
function navigateTo(page) {
  const buttons = document.querySelectorAll('.nav-buttons button');
  buttons.forEach(btn => btn.classList.remove('clicked'));

  const target = {
    home: "Navighează la Home",
    about: "Navighează la About Us",
    contact: "Navighează la Contact"
  };

  const clickedButton = [...buttons].find(btn => btn.textContent.toLowerCase().includes(page));
  if (clickedButton) {
    clickedButton.classList.add('clicked');
    setTimeout(() => clickedButton.classList.remove('clicked'), 600);
  }

  const section = document.getElementById(page);
  if (section) {
    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  console.log(target[page]);
}

// Efect de apariție pentru motto la scroll (IntersectionObserver)
document.addEventListener("DOMContentLoaded", function () {
  const motto = document.getElementById("motto");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        motto.classList.add("visible");
      }
    });
  });

  observer.observe(motto);
});

// Scroll smooth pentru toate linkurile cu ancora (#)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// Slider logic
// Slider logic
const slider = document.getElementById('imageSlider');
const slides = slider.querySelectorAll('.slider-img');
const totalSlides = slides.length;
let index = 0;

function showSlide(i) {
  slider.style.transform = `translateX(-${i * 100}%)`;
}

function nextSlide() {
  index = (index + 1) % totalSlides;
  showSlide(index);
}

function prevSlide() {
  index = (index - 1 + totalSlides) % totalSlides;
  showSlide(index);
}

document.querySelector('.arrow.right').addEventListener('click', nextSlide);
document.querySelector('.arrow.left').addEventListener('click', prevSlide);

// Auto-scroll every 10s
setInterval(nextSlide, 10000);

// Scroll reveal effect
window.addEventListener('scroll', () => {
  const section = document.querySelector('.poveste-section');
  const rect = section.getBoundingClientRect();
  if (rect.top <= window.innerHeight - 150) {
    section.classList.add('visible');
  }
});

// Scroll reveal pentru testimonialele individuale
document.addEventListener("DOMContentLoaded", function () {
  const revealElements = document.querySelectorAll(".scroll-reveal");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 150); // delay în cascadă (150ms între fiecare)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.2
  });

  revealElements.forEach(el => observer.observe(el));
});

// Afișează butonul „Sus” la scroll
window.addEventListener("scroll", function () {
  const backToTop = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
});

// Scroll smooth la header când este apăsat butonul
document.getElementById("backToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



// Poți adăuga logica video schimbabilă sau efecte pentru secțiuni mai târziu
