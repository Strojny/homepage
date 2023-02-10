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

    const toggleBackground = () => {
        const body = document.documentElement;
        const tableDarkMode = document.querySelectorAll(".js-tableDarkMode");
        const linkDarkMode = document.querySelectorAll(".js-linkDarkMode");
        const darkModeButtonText = document.querySelector(".js-darkModeButtonText");

        body.classList.toggle("darkMode");

        tableDarkMode.forEach(tableRow => {

            tableRow.classList.toggle("table__DarkMode");
        });

        linkDarkMode.forEach(nav__link => {

            nav__link.classList.toggle('nav__linkDarkMode');
        });

        darkModeButtonText.innerText = body.classList.contains("darkMode") ? "Light" : "Dark";
    };

    const init = () => {
        const button2 = document.querySelector(".js-darkModeSwitch");

        button2.addEventListener("click", toggleBackground)

        photoHide();
    };

    init();
}