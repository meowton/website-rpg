// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");
var navbarColor = document.getElementById("navbarBar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop + 200;

// Add the sticky class to the navbar when you reach its scroll position. 
// Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add("navbarSticky");
    navbarColor.classList.add("navbarColor");
    document.getElementById("bannerBox").style.paddingTop = "3.3%";

    navbarColor.classList.add("navbar-dark");
    navbarColor.classList.remove("navbar-light");
    
  } else {
    navbar.classList.remove("navbarSticky");
    navbarColor.classList.remove("navbarColor");
    document.getElementById("bannerBox").style.paddingTop = "0%";

    navbarColor.classList.add("navbar-light");
    navbarColor.classList.remove("navbar-dark");
  }
} 