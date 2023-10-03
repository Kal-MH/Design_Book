const nav = document.querySelector(".main-nav");
const navButton = document.querySelector(".btn-menu");

navButton.addEventListener("click", function (e) {
  if (Array.from(nav.classList).includes("open-menu")) {
    nav.classList.remove("open-menu");
    navButton.textContent = "Menu";
  } else {
    nav.classList.add("open-menu");
    navButton.textContent = "Close";
  }
});
