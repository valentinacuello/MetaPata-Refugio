//Responsive Menu
const responsiveMenu = () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navBarLinks = document.getElementsByClassName("nav-links")[0];
    const burgerMenu = document.getElementById("burgerMenu")

    menuToggle.addEventListener("click", () => {
        navBarLinks.classList.toggle("active");
        burgerMenu.classList.toggle("burger-open");
    });
};

responsiveMenu();


document.getElementById("ctaBtn").onclick = function () {
    location.href = "adopciones.html";
};

document.getElementById("donar-btn").onclick = function () {
    location.href = "donar.html";
};