function updateListeners() {
  var backToTopButton = document.getElementById("back-to-top");
  var header = document.getElementById("header");

  window.addEventListener("scroll", function () {
    console.log("scrolling");
    const firstContainer = document.getElementById("first-container");
    const firstContainerBottom = firstContainer.getBoundingClientRect().bottom;

    var header = document.getElementById("navbar");
    var spacer = document.querySelector(".spacer");
    var spacerBottom = spacer.offsetTop + spacer.offsetHeight;

    if (window.pageYOffset > spacerBottom - 20) {
      header.classList.add("fixed");
    } else {
      header.classList.remove("fixed");
    }

    if (firstContainerBottom < 0) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  backToTopButton.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

function loadContent() {
  updateListeners();
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
    return;
  }

  var fileName;
  switch (lang) {
    case "en":
      fileName = isMobile ? "mobile.html" : "index.html";
      break;
    case "ru":
      fileName = isMobile ? "mobile_ru.html" : "flat_ru.html";
      break;
    case "sr":
      fileName = isMobile ? "mobile_sr.html" : "flat_sr.html";
      break;
    default:
      fileName = isMobile ? "mobile.html" : "index.html";
  }
  themeStylesheet.setAttribute(
    "href",
    isMobile ? "mobile.css" : "stylemain.css"
  );
  fetch(fileName)
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
// document.getElementById("current-language").textContent = lang.toUpperCase();

document.addEventListener("DOMContentLoaded", loadContent);
window.addEventListener("resize", loadContent);
window.addEventListener("load", loadContent);
