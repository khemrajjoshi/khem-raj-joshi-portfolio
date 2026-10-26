const siteHeader = document.querySelector(".site-header");
const menuButton = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector(".site-nav");
siteHeader.classList.add("has-menu-toggle");
function toggleMenu() {
  const isOpen = siteNavigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", isOpen);
}
function closeMenu() {
  siteNavigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}
menuButton.addEventListener("click", toggleMenu);
siteNavigation.addEventListener("click", closeMenu);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && menuButton.getAttribute("aria-expanded") === "true") {
    closeMenu();
    menuButton.focus();
  }
});
