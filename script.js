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

  document.getElementById("back-to-top").addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  document.addEventListener("scroll", function () {
    const firstContainer = document.getElementById("first-container");
    const backToTopButton = document.getElementById("back-to-top");

    const firstContainerBottom = firstContainer.getBoundingClientRect().bottom;

    if (firstContainerBottom < 0) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

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
}

window.addEventListener("resize", loadContent);
window.addEventListener("load", loadContent);
document.getElementById("current-language").textContent = lang.toUpperCase();
