/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */

$( document ).ready(function() {
  // Handler for .ready() called.



function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }




});