/* ~~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~~ */
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const closeIcon = document.getElementById("nav-close");

navLink.forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.add("hidden");
    });
});

closeIcon.addEventListener("click", () => {
    navMenu.classList.add("hidden");
});

hamburger.addEventListener("click", () => {
    navMenu.classList.remove("hidden");
});

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

//Verificando o mode da página
if(localStorage.getItem("mode") == "dark"){
    darkMode();
}else{
    lightMode();
}

themeBtn.addEventListener("click", (e) => {
    if(localStorage.getItem("mode") == "light"){
        darkMode();
    }else{
        lightMode();
    }
})

function darkMode(){
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line", "ri-sun-line");
    localStorage.setItem("mode", "dark");
}

function lightMode(){
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line", "ri-moon-line");
    localStorage.setItem("mode", "light");
}

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
