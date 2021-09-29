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


//Para evitar errores en consola en otras páginas
if (document.getElementById("ctaBtn")) {
    document.getElementById("ctaBtn").onclick = function () {
        location.href = "adopciones.html";
    };
};

//Para evitar errores en consola en otras páginas
if (document.getElementById("donar-btn")) {
    document.getElementById("donar-btn").onclick = function () {
        location.href = "donar.html";
    };
};