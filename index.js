$(document).ready(function () {
  $(".video-testimonial").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
      },
      600: {
        items: 3,
        nav: false,
        loop: true,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });

  // Services Carousel
  $(".services-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 2,
        nav: false,
        loop: true,
      },
      600: {
        items: 3,
        nav: false,
        loop: true,
      },
      1000: {
        items: 5,
        nav: false,
        loop: true,
      },
    },
  });

  $(".doctors-carousel").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
      },
      600: {
        items: 3,
        nav: false,
        loop: true,
      },
      1000: {
        items: 4,
        nav: true,
        loop: false,
      },
    },
  });

  $(".google-testimonial").owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    dots: true,
    autoplay: true,
    autoplayTimeout: 5000,
    responsive: {
      0: {
        items: 1,
        nav: false,
        loop: true,
      },
      600: {
        items: 3,
        nav: false,
        loop: true,
      },
      1000: {
        items: 3,
        nav: false,
        loop: false,
      },
    },
  });
});

const treatmentBtn = document.getElementById("treatment");
const processBtn = document.getElementById("process");
const treatmentContent = document.getElementById("treatment-content");
const treatmentProcess = document.getElementById("treatment-process");

treatmentBtn.addEventListener("click", function () {
  this.classList.add("active");
  processBtn.classList.remove("active");
  treatmentContent.style.display = "flex";
  treatmentProcess.style.display = "none";
});

processBtn.addEventListener("click", function () {
  this.classList.add("active");
  treatmentBtn.classList.remove("active");
  treatmentProcess.style.display = "flex";
  treatmentContent.style.display = "none";
});

const hairfallBtn = document.getElementById("hairfall");
const hairtreatmentBtn = document.getElementById("hairtreatment");
const hairfallContent = document.getElementById("hairfall-content");
const hairtreatment = document.getElementById("hairtreatment-content");

hairfallBtn.addEventListener("click", function () {
  this.classList.add("active");
  hairtreatmentBtn.classList.remove("active");
  hairfallContent.style.display = "flex";
  hairtreatment.style.display = "none";
});

hairtreatmentBtn.addEventListener("click", function () {
  this.classList.add("active");
  hairfallBtn.classList.remove("active");
  hairfallContent.style.display = "none";
  hairtreatment.style.display = "flex";
});

// document.onkeydown = function (e) {
//   if (
//     e.keyCode === 123 ||
//     (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
//     (e.ctrlKey && e.keyCode === 85)
//   ) {
//     return false;
//   }
// };

// document.addEventListener("contextmenu", function (e) {
//   e.preventDefault();
// });
