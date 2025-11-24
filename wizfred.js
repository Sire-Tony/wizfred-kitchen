// HAMBURGER MENU
const menuBtn = document.getElementById("nav-btn");
const nav = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav-list a");

    menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuBtn.firstElementChild.classList.toggle("fa-bars");
    menuBtn.firstElementChild.classList.toggle("fa-xmark");
      });

      navLinks.forEach((link) => {
        link.addEventListener("click", () => {
          nav.classList.remove("open");
          menuBtn.firstElementChild.classList.add("fa-bars");
          menuBtn.firstElementChild.classList.remove("fa-xmark");
        });
      });

      // SCROLL SPY (highlight active nav link)
      const sections = document.querySelectorAll("section");

      window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;

          if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
          }
        });

        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
          }
        });
      });

      // WHATSAPP FORM
      function sendToWhatsApp(event) {
        event.preventDefault();

        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;

        var whatsappNumber = "2348126169285";

        var url =
          "https://wa.me/" +
          whatsappNumber +
          "?text=" +
          "Name: " +
          name +
          "%0a" +
          "Phone: " +
          phone +
          "%0a" +
          "Email: " +
          email +
          "%0a" +
          "Message: " +
          message;

        window.open(url, "_blank");
      }
      // SKELETON
      // REPLACE SKELETON WITH REAL IMAGE WHEN LOADED
document.querySelectorAll(".menu-img").forEach(img => {
  img.addEventListener("load", () => {
    const skeleton = img.previousElementSibling;
    skeleton.style.display = "none";   // hide skeleton
    img.style.display = "block";       // show real image
  });
});

