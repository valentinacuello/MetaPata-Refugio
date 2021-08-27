//Responsive Menu
const responsiveMenu = () =>{
    const menuToggle = document.getElementById("menu-toggle");
    const navBarLinks = document.getElementsByClassName("nav-links")[0];
    const burgerMenu = document.getElementById("burgerMenu")

    menuToggle.addEventListener("click", ()=>{
        navBarLinks.classList.toggle("active");
        burgerMenu.classList.toggle("burger-open");
    });
};

responsiveMenu();