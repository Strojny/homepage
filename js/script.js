{
    const togglePhotoClass = () => {
        const photo = document.querySelector(".topBox__image");

        photo.classList.toggle("js-photoHide");
    }

    const togglePhotoButtonText = () => {
        const photoButtonText = document.querySelector(".js-photoButtonText");
        const photo = document.querySelector(".topBox__image");

        photoButtonText.innerText = photo.classList.contains("js-photoHide") ? "Show" : "Hide";
    }

    const togglePhotoAndButtonClasses = () => {

        togglePhotoClass();
        togglePhotoButtonText();
    }

    const photoHide = () => {
        const button1 = document.querySelector(".js-photoSwitch");

        button1.addEventListener("click", togglePhotoAndButtonClasses);
    }

    const DarkModeButtonInnerTextToggle = (body) => {
        const darkModeButtonText = document.querySelector(".js-darkModeButtonText");

        darkModeButtonText.innerText = body.classList.contains("darkMode") ? "Light" : "Dark";
    }

    const darkMode = () => {
        const button2 = document.querySelector(".js-darkModeSwitch");

        button2.addEventListener("click", toggleBackground);
    }

    const bodyDarkModeToggle = (body) => {

        body.classList.toggle("darkMode");
    }

    const tableDarkModeToggle = () => {
        const tableDarkMode = document.querySelectorAll(".js-tableDarkMode");

        tableDarkMode.forEach(tableRow => {
            tableRow.classList.toggle("table__DarkMode");
        });
    }

    const linkDarkModeToggle = () => {
        const linkDarkMode = document.querySelectorAll(".js-linkDarkMode");

        linkDarkMode.forEach(nav__link => {
            nav__link.classList.toggle('nav__linkDarkMode');
        });
    }

    const toggleBackground = () => {
        const body = document.documentElement;

        bodyDarkModeToggle(body);
        DarkModeButtonInnerTextToggle(body);
        tableDarkModeToggle();
        linkDarkModeToggle();
    };

    const init = () => {

        darkMode();

        photoHide();
    };

    init();
}