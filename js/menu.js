document.addEventListener("DOMContentLoaded", function() {
    const menuHtml = `
        <ul id="menu_main" class="menu_main_nav">
            <li class="menu-item">
                <a href="index.html">Home</a>
            </li>
            <li class="menu-item">
                <a href="about.html">About</a>
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

    // Mobile hamburger: build overlay + slide panel using the same menu
    const existingOverlay = document.getElementById('mobile_nav_overlay');
    if (!existingOverlay) {
        const overlay = document.createElement('div');
        overlay.id = 'mobile_nav_overlay';
        overlay.className = 'mobile_nav_overlay';
        overlay.innerHTML = `
            <div class="mobile_nav_panel" role="dialog" aria-modal="true" aria-label="Main navigation">
                <button type="button" class="mobile_nav_close" aria-label="Close menu">×</button>
                <nav class="mobile_nav_inner">${menuHtml}</nav>
            </div>
        `;
        document.body.appendChild(overlay);

        // Highlight current link inside mobile menu too
        const mobileLinks = overlay.querySelectorAll('a');
        const current = (function(){
            let p = window.location.pathname.split('/').pop();
            return p === '' ? 'index.html' : p;
        })();
        mobileLinks.forEach(a => {
            if (a.getAttribute('href') === current) {
                a.parentElement.classList.add('current-menu-item');
            }
        });

        // Wire up interactions
        const closeMenu = function() {
            document.body.classList.remove('mobile_menu_open');
            const btn = document.querySelector('.menu_main_responsive_button');
            if (btn) btn.setAttribute('aria-expanded', 'false');
        };
        const openMenu = function() {
            document.body.classList.add('mobile_menu_open');
            const btn = document.querySelector('.menu_main_responsive_button');
            if (btn) btn.setAttribute('aria-expanded', 'true');
        };
        overlay.addEventListener('click', function(e){
            if (e.target === overlay) closeMenu();
        });
        overlay.querySelector('.mobile_nav_close').addEventListener('click', function(){
            closeMenu();
        });
        overlay.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', function(){ closeMenu(); });
        });

        // Use existing hamburger button if present
        const toggleBtn = document.querySelector('.menu_main_responsive_button');
        if (toggleBtn) {
            toggleBtn.setAttribute('aria-controls', 'mobile_nav_overlay');
            toggleBtn.setAttribute('aria-expanded', 'false');
            toggleBtn.addEventListener('click', function(e){
                e.preventDefault();
                e.stopPropagation();
                if (document.body.classList.contains('mobile_menu_open')) {
                    closeMenu();
                } else {
                    openMenu();
                }
            });
        }

        // Close on escape
        document.addEventListener('keydown', function(e){
            if (e.key === 'Escape') closeMenu();
        });

        // Auto-close when resizing to desktop
        window.addEventListener('resize', function(){
            if (window.innerWidth > 959) closeMenu();
        });
    }
});
