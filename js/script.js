
let button1 = document.querySelector(".js-photoSwitch");
let photo = document.querySelector(".topBox__image");
let photoButtonText = document.querySelector(".js-photoButtonText");

button1.addEventListener("click", () => {

    photo.classList.toggle("js-photoHide");

    photoButtonText.innerText = photo.classList.contains("js-photoHide") ? "Show" : "Hide";

});


let button2 = document.querySelector(".js-darkModeSwitch");
let body = document.querySelector(".js-body");
let DarkModeButtonText = document.querySelector(".js-darkModeButtonText");
let linkAboutMeDarkMode = document.querySelector(".js-linkAboutMeDarkMode");
let linkPlanDarkMode = document.querySelector(".js-linkPlanDarkMode");
let linkHobbyDarkMode = document.querySelector(".js-linkHobbyDarkMode");
let linkContactDarkMode = document.querySelector(".js-linkContactDarkMode");
let tableDarkMode = document.querySelector(".js-tableDarkMode");

button2.addEventListener("click", () => {

    body.classList.toggle("darkMode");

    DarkModeButtonText.innerText = body.classList.contains("darkMode") ? "Light" : "Dark";

    linkAboutMeDarkMode.classList.toggle("nav__linkDarkMode");
    linkPlanDarkMode.classList.toggle("nav__linkDarkMode");
    linkHobbyDarkMode.classList.toggle("nav__linkDarkMode");
    linkContactDarkMode.classList.toggle("nav__linkDarkMode");

    linkAboutMeDarkMode.classList.toggle("nav__linkDarkMode:visited");
    linkPlanDarkMode.classList.toggle("nav__linkDarkMode:visited");
    linkHobbyDarkMode.classList.toggle("nav__linkDarkMode:visited");
    linkContactDarkMode.classList.toggle("nav__linkDarkMode:visited");

    tableDarkMode.classList.toggle("table__DarkMode");

});