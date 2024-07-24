// Get the menu button, navigation links container and menu button icon
const menuBtn = document.querySelector("#menu-btn");
const navLinks = document.querySelector("#nav-links");
const menuBtnIcon = document.querySelector("i");

// Toggle navigation links and change menu icon on menu button click
menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

// Close navigation links and eset menu icon when a link is clicked
navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

// Get the search button in the navigation
const navSearch = document.querySelector("#nav-search");

// Toggle the search button open class on click
navSearch.addEventListener("click", (e) => {
  navSearch.classList.toggle("open");
});
