// Select the menu icon and navbar elements
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.getElementById("navbar");

// Toggle navbar visibility when the menu icon is clicked
menuIcon.addEventListener("click", function () {
  if (navbar.style.display === "flex" || navbar.style.display === "flex") {
    navbar.style.display = "none";
  } else {
    navbar.style.display = "flex";
  }
});

// Optional: On window resize, ensure the navbar is visible on larger screens.
window.addEventListener("resize", function() {
  if (window.innerWidth > 785) {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
  }
});

// Hide navbar if clicked on small screen.
function hide() {
  if (window.innerWidth > 785) {
    navbar.style.display = "flex";
  } else {
    navbar.style.display = "none";
  }
}