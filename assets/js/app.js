/*
  IMPORTANT:
  Replace YOURDOMAIN.COM with your actual official domain
  before deploying the website.
*/

const SITE_URL = "https://Abdulsamadworks.sbs";

/* Mobile Navigation */

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");

    const expanded = menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", !expanded);
  });
}

/* Scroll Reveal */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.12
  }
);

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

/* Contact Form */

const contactForm = document.querySelector("#contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    alert(
      "Thank you for your message. This contact form is currently in frontend demonstration mode."
    );
  });
}

/*
  Canonical URL / metadata configuration note:

  SITE_URL is the central domain configuration variable.
  Before deployment, replace:

  https://YOURDOMAIN.COM

  with your actual official domain.

  Also replace YOURDOMAIN.COM in the canonical and
  structured data URLs inside the HTML files.
*/
