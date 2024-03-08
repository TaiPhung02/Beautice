const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons");
const overlay = document.querySelector("#overlay");
const toTop = document.querySelector(".to-top");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});

overlay.addEventListener("click", () => {
    menu.classList.toggle("navbar__open");
    menuButton.classList.toggle("open");
    overlay.classList.toggle("show");
});

toTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
    });
});
