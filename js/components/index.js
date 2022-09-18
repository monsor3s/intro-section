/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function FunctionFeatures() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.navbar-dropdown')) {
    var dropdowns = document.getElementById("myDropdown");
      if (dropdowns.classList.contains("show")) {
        dropdowns.classList.remove("show");
      }
    }
  }


  // window.onclick = function(e) {
  //   if (!e.target.matches('.navbar-dropdown')) {
  //     var dropdowncomp = document.getElementsByClassName(".dropdown-menu -company");
  //     if (dropdowncomp.classList.contains("show")) {
  //       dropdowncomp.classList.remove("show");
  //     }
  //   }
  // }