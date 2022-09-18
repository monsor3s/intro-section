function FunctionFeatures() {
    document.getElementById("myDropdown").classList.toggle("show");
    
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropdown')) {
    var dropdowns = document.getElementById("myDropdown");
      if (dropdowns.classList.contains("show")) {
        dropdowns.classList.remove("show");
      }
    }
  }

function FeaturesCompany() {
    document.getElementById("DropdownComp").classList.toggle("show");
}

window.onclick = function(e) {
  if (!e.target.matches('.dropdown')) {  
  var dropdownscom = document.getElementById("DropdownComp");
    if (dropdownscom.classList.contains("show")) {
      dropdownscom.classList.remove("show");
    }
  }
}