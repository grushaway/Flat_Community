document.addEventListener("DOMContentLoaded", function () {
  var backToTopButton = document.getElementById("back-to-top");
  var header = document.getElementById("header");

  window.addEventListener("scroll", function () {
    const firstContainer = document.getElementById("first-container");
    const firstContainerBottom = firstContainer.getBoundingClientRect().bottom;

    if (firstContainerBottom < 0) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  window.addEventListener("scroll", function () {
    var header = document.getElementById("navbar");
    var spacer = document.querySelector(".spacer");
    var spacerBottom = spacer.offsetTop + spacer.offsetHeight;

    if (window.pageYOffset > spacerBottom - 20) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  function loadContent() {
    const themeStylesheet = document.getElementById("theme-stylesheet");
    const content = document.getElementById("content-table");
    const userAgent = navigator.userAgent.toLowerCase();
    const isMobile =
      /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(
        userAgent
      );

    if (isMobile) {
      themeStylesheet.setAttribute("href", "mobile.css");
      fetch("mobile.html")
        .then((response) => response.text())
        .then((data) => {
          content.innerHTML = data;
        });
    } else {
      themeStylesheet.setAttribute("href", "stylemain.css");
      fetch("index.html")
        .then((response) => response.text())
        .then((data) => {
          content.innerHTML = data;
        });
    }

    function switchLanguage(lang) {
      const texts = document.querySelectorAll(".text-lang");
      texts.forEach((text) => {
        if (text.id.includes(lang)) {
          text.style.display = "block";
        } else {
          text.style.display = "none";
        }
      });
    }
    
    loadContent();

    window.addEventListener("resize", loadContent);
    window.addEventListener("load", loadContent);
    document.getElementById("current-language").textContent =
      lang.toUpperCase();
  }
});
