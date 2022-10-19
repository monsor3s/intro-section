let show = true;

const menuSection = document.querySelector(".navbar-container")
const menuToggle = document.querySelector(".menu-toggle")
const backgroundTransparent = document.querySelector(".nav-background-transparent")

const toggleFeatures = document.getElementById("dropdownFeatures")
const toggleCompany = document.getElementById("dropdownCompany")
const dropdownFeat = document.getElementById("dropdownFeat")
const dropdownComp = document.getElementById("dropdownComp")
const arrowFeat = document.querySelector(".navbar-dropdown-icon")
const arrowComp = document.querySelector(".navbar-dropdown-icon.-company")


menuToggle.addEventListener("click", () => {
    backgroundTransparent.style.display = show ? "block" : "none"
    menuSection.classList.toggle("on", show)
    show = !show;
})

toggleFeatures.addEventListener("click", () => {
    arrowFeat.style.transform = show ? "rotateX(180deg)" : "initial"
    arrowFeat.style.transition = "0.3s"
    dropdownFeat.classList.toggle("on", show)
    show = !show;
})

toggleCompany.addEventListener("click", () => {
    arrowComp.style.transform = show ? "rotateX(180deg)" : "initial"
    arrowComp.style.transition = "0.3s"
    dropdownComp.classList.toggle("on", show)
    show = !show;
})

