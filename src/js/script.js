const logo = document.getElementById("logo");
logo.addEventListener('click', () => {
    const myBody = document.querySelector("body");
    myBody.classList.toggle("bg-dark");
    myBody.classList.toggle("text-white");

    const h1 = document.querySelector("h1");
    h1.classList.toggle("text-white");

    // Toggle text color for links
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        link.classList.toggle("text-white");
    });
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle("text-white");
});
