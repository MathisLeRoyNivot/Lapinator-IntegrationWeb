$('.burger-menu').on('click', function () {
  $(this).toggleClass("burger-menu--opened");
  $(this).toggleClass("burger-menu--closed");
});


function myFunction() {
  var x = document.getElementById("navbarTop");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
} 