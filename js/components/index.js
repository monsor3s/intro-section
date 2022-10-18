let show = true;

const menuSection = document.querySelector(".navbar-container")
const menuToggle = document.querySelector(".menu-toggle")

menuToggle.addEventListener("click", () => {
    menuSection.classList.toggle("on", show)
    show = !show;
})

// let show = true;

// const menuSection = document.querySelector(".dropdown")
// const menuFeatures = document.querySelector("#myDropdown")
// const menuCompany = document.querySelector("#dropdownComp")
// const iconDrop = document.querySelector(".navbar-dropdown-icon")

// menuSection.addEventListener("click", () => {
//   iconDrop.style.transform = "rotateX(180deg)";
//   menuFeatures.classList.toggle("on", show)
//   show = !show;
// })



// menuSection.addEventListener("click", () => {
//     menuFeatures.classList.toggle("off", show)
//     iconDrop.style.transform = "none";
//     show = show;
//   })

// menuSection.addEventListener("click", () => {
//   menuCompany.classList.toggle("on", show)
//   show = show;
// })



// function FunctionFeatures() {
//     document.getElementById("myDropdown").classList.toggle("show");
//   }
  
//   // Close the dropdown if the user clicks outside of it
// window.onclick = function(e) {
//     if (!e.target.matches('.dropdown')) {
//     var dropdowns = document.getElementById("myDropdown");
//       if (dropdowns.classList.contains("show")) {
//         dropdowns.classList.remove("show");
//       }
//     }
//   }

// function FunctionCompany() {
//     document.getElementById("DropdownComp").classList.toggle("show");
// }

// window.onclick = function(e) {
//   if (!e.target.matches('.dropdown')) {  
//   var dropdownscom = document.getElementById("DropdownComp");
//     if (dropdownscom.classList.contains("show")) {
//       dropdownscom.classList.remove("show");
//     }
//   }
// }