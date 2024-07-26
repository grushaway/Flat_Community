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

document.getElementById("back-to-top").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

function loadContent() {
  const width = window.innerWidth;
  const themeStylesheet = document.getElementById("theme-stylesheet");
  const content = document.getElementById("content-table");

  if (width <= 600) {
    themeStylesheet.setAttribute("href", "mobile.css");
    fetch("mobile.html")
      .then((response) => response.text())
      .then((data) => {
        content.innerHTML = data;
      });
  }
}

window.addEventListener("resize", loadContent);
window.addEventListener("load", loadContent);
