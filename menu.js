const hamburger = document.querySelector(".hamburger")
const mobileNav = document.querySelector(".mobile-nav")
const closeMenu = document.querySelector(".close-menu")
const blackBlur = document.querySelector(".blur")

// Otevreni menu

hamburger.addEventListener("click", function () {
    mobileNav.classList.add("open");
    
} )


// Zavreni menu

closeMenu.addEventListener("click", function(){
    mobileNav.classList.remove("open")
}
)