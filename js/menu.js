document.addEventListener("DOMContentLoaded", function() {
    const menuHtml = `
        <ul id="menu_main" class="menu_main_nav">
            <li class="menu-item">
                <a href="index.html">Home</a>
            </li>
            <li class="menu-item">
                <a href="about-us.html">About Us</a>
            </li>
            <li class="menu-item">
                <a href="contacts.html">Contact Us</a>
            </li>
        </ul>
    `;

    const menuContainer = document.querySelector("nav.menu_main_nav_area");
    if (menuContainer) {
        menuContainer.innerHTML = menuHtml;

        let currentPage = window.location.pathname.split("/").pop();
        if (currentPage === "") {
            currentPage = "index.html";
        }
        const menuLinks = menuContainer.querySelectorAll("a");

        menuLinks.forEach(link => {
            if (link.getAttribute("href") === currentPage) {
                let parentLi = link.parentElement;
                while(parentLi && parentLi.tagName === 'LI') {
                    parentLi.classList.add("current-menu-item");
                    parentLi = parentLi.parentElement.closest('li');
                }
            }
        });
    }
});
