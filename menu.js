const hamburger = document.querySelector(".hamburger");
const mobileNav = document.querySelector(".mobile-nav");
const closeMenu = document.querySelector(".close-menu");
const blackBlur = document.querySelector(".blur");


// Otevreni menu

hamburger.addEventListener("click", function () {
    mobileNav.classList.add("open");
    blackBlur.classList.add("open");
});


// Zavreni menu pomoci X

closeMenu.addEventListener("click", function () {
    mobileNav.classList.remove("open");
    blackBlur.classList.remove("open");
});


// Zavreni menu kliknutim na zatmavenou cast

blackBlur.addEventListener("click", function () {
    mobileNav.classList.remove("open");
    blackBlur.classList.remove("open");
});