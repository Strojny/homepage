
let button1 = document.querySelector(".js-photoSwitch");
let photo = document.querySelector(".topBox__image");
let photoButtonText = document.querySelector(".js-photoButtonText");

button1.addEventListener("click", () => {

    photo.classList.toggle("js-photoHide");

    photoButtonText.innerText = photo.classList.contains("js-photoHide") ? "Show" : "Hide";

});


{
    const toggleBackground = () => {

        const body = document.documentElement;
        const tableDarkMode = document.querySelectorAll(".js-tableDarkMode");
        const linkDarkMode = document.querySelectorAll(".js-linkDarkMode");
        const DarkModeButtonText = document.querySelector(".js-darkModeButtonText");

        body.classList.toggle("darkMode");

        tableDarkMode.forEach(tableRow => {

            tableRow.classList.toggle("table__DarkMode");
        });

        linkDarkMode.forEach(nav__link => {

            nav__link.classList.toggle('nav__linkDarkMode');
        });

        DarkModeButtonText.innerText = body.classList.contains("darkMode") ? "Light" : "Dark";
    };

    const init = () => {
        let button2 = document.querySelector(".js-darkModeSwitch");

        button2.addEventListener("click", toggleBackground)
    };

    init();

}