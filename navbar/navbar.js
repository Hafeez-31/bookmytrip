document.addEventListener("DOMContentLoaded", function () {

    const navbarContainer = document.getElementById("navbar");

    if (!navbarContainer) return;

    let currentPath = window.location.pathname;
    let navbarPath = "";

    if (
        currentPath.includes("trains") ||
        currentPath.includes("flights") ||
        currentPath.includes("hotels")
    ) {
        navbarPath = "../navbar/navbar.html";
    } else {
        navbarPath = "navbar/navbar.html";
    }

    fetch(navbarPath)
        .then(res => res.text())
        .then(data => {
            navbarContainer.innerHTML = data;
        })
        .catch(error => console.error("Navbar load error:", error));
});
