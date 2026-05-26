// ==========================
// MOBILE MENU TOGGLE
// ==========================
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const overlay = document.getElementById("overlay");

if (hamburger && mobileMenu && overlay) {
  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
    hamburger.classList.toggle("active");
    overlay.classList.toggle("show");
  });

  // Close menu when clicking links
  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("show");
      hamburger.classList.remove("active");
      overlay.classList.remove("show");
    });
  });

  // Close menu when clicking overlay
  overlay.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
    hamburger.classList.remove("active");
    overlay.classList.remove("show");
  });
}

// ==========================
// SCROLL ANIMATION OBSERVER
// ==========================
const animationObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".hidden-left, .hidden-right").forEach((el) => {
  animationObserver.observe(el);
});

// ==========================
// ACTIVE NAV LINK
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a");

  function activateMenu() {
    const scrollPos = window.scrollY + 150;

    sections.forEach((section) => {
      if (
        scrollPos >= section.offsetTop &&
        scrollPos < section.offsetTop + section.offsetHeight
      ) {
        const currentId = section.getAttribute("id");

        navLinks.forEach((link) => {
          link.classList.remove("active");

          if (link.getAttribute("href") === `#${currentId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  window.addEventListener("scroll", activateMenu);
});

// ==========================
// SMOOTH SCROLL
// ==========================
document.querySelectorAll(".nav-links a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);
    const navbar = document.querySelector(".navbar");

    if (targetSection && navbar) {
      const navbarHeight = navbar.offsetHeight;

      window.scrollTo({
        top: targetSection.offsetTop - navbarHeight,
        behavior: "smooth",
      });
    }
  });
});

// ==========================
// TYPING EFFECT
// ==========================
const phrases = [
  "Data Analyst",
  "Machine Learning Enthusiast",
];

const taglineElement = document.getElementById("tagline");

let phraseIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (!taglineElement) return;

  if (charIndex < phrases[phraseIndex].length) {
    taglineElement.textContent += phrases[phraseIndex].charAt(charIndex);
    charIndex++;

    setTimeout(typeEffect, 60);
  } else {
    setTimeout(() => {
      taglineElement.classList.add("fade-out");

      setTimeout(() => {
        taglineElement.textContent = "";
        taglineElement.classList.remove("fade-out");

        phraseIndex = (phraseIndex + 1) % phrases.length;
        charIndex = 0;

        taglineElement.classList.add("fade-in");

        typeEffect();
      }, 500);
    }, 1500);
  }
}

typeEffect();

// ==========================
// SKILL CARD HOVER EFFECT
// ==========================
document.querySelectorAll(".skill-card").forEach((card) => {
  const color = card.getAttribute("data-color") || "#00ffff";

  card.addEventListener("mouseenter", () => {
    card.style.boxShadow = `0 0 15px ${color}`;
    card.style.transform = "translateY(-5px)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.boxShadow = "none";
    card.style.transform = "translateY(0)";
  });
});

// ==========================
// PROJECT MODAL
// ==========================
const modal = document.getElementById("projectModal");
const modalImg = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalTech = document.getElementById("modalTech");
const modalDesc = document.getElementById("modalDesc");
const closeBtn = document.querySelector(".close-btn");

if (modal && closeBtn) {
  document.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => {
      modal.style.display = "flex";

      if (modalImg) {
        modalImg.src = card.getAttribute("data-img") || "";
      }

      if (modalTitle) {
        modalTitle.textContent = card.getAttribute("data-title") || "";
      }

      if (modalTech) {
        modalTech.textContent = card.getAttribute("data-tech") || "";
      }

      if (modalDesc) {
        modalDesc.textContent = card.getAttribute("data-desc") || "";
      }
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
}

// ==========================
// TIMELINE PROGRESS
// ==========================
const timeline = document.querySelector(".experience-timeline");
const progressDot = document.querySelector(".progress-dot");
const progressLine = document.querySelector(".progress-line");

function updateTimelineProgress() {
  if (!timeline || !progressDot || !progressLine) return;

  const rect = timeline.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if (rect.top < windowHeight && rect.bottom > 0) {
    const scrollProgress = Math.min(
      Math.max(
        (windowHeight - rect.top) / (rect.height + windowHeight),
        0
      ),
      1
    );

    const topPosition = scrollProgress * rect.height;

    progressDot.style.top = `${topPosition}px`;
    progressLine.style.height = `${topPosition}px`;
  }
}

window.addEventListener("scroll", updateTimelineProgress);

// ==========================
// SECTION HEADING ANIMATION
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const headings = document.querySelectorAll(
    ".section-heading, .section-title"
  );

  const headingObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.5 }
  );

  headings.forEach((heading) => {
    heading.classList.add("heading-underline");
    headingObserver.observe(heading);
  });
});

document.addEventListener("DOMContentLoaded", function () {

    // =========================
    // CHECK EMAILJS
    // =========================

    if (typeof emailjs === "undefined") {
        console.error("EmailJS is not loaded");
        return;
    }

    // =========================
    // INITIALIZE EMAILJS
    // =========================

    emailjs.init("uzULmgIgwqhMXqqup");

    // =========================
    // SELECT FORM
    // =========================

    const contactForm = document.getElementById("contact-form");

    if (!contactForm) return;

    // =========================
    // FORM SUBMIT
    // =========================

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        // =========================
        // CREATE POPUP
        // =========================

        const successBlast = document.createElement("div");

        successBlast.classList.add("success-blast");

        successBlast.innerHTML = `
            <div class="success-content">

                <i class="fa-solid fa-circle-check"></i>

                <h2>Sending...</h2>

                <p>
                    Your message is being sent successfully.
                </p>

            </div>
        `;

        // SHOW POPUP
        document.body.appendChild(successBlast);

        // =========================
        // SEND EMAIL
        // =========================

        emailjs.sendForm(
            "service_wb9f1tk",
            "template_nrx3q6r",
            this
        )

        .then(() => {

            // SUCCESS MESSAGE
            successBlast.querySelector("h2").textContent = "Thank You!";

            successBlast.querySelector("p").textContent =
                "Your message has been sent successfully.";

            // RESET FORM
            contactForm.reset();

            // REMOVE POPUP
            setTimeout(() => {
                successBlast.remove();
            }, 3000);

        })

        .catch((error) => {

            console.error(error);

            // FAILED MESSAGE
            successBlast.querySelector("h2").textContent = "Failed";

            successBlast.querySelector("p").textContent =
                "Failed to send message. Please try again.";

            // REMOVE POPUP
            setTimeout(() => {
                successBlast.remove();
            }, 3000);

        });

    });

});