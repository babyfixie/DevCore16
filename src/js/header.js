import header1x from '../img/header/header_logo@1x.png';
import header2x from '../img/header/header_logo@2x.png';

const images = {
  header: {
    srcset: header2x,
    src: header1x,
  },
};

export default images;

document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll(`.header-image`);
  imgs.forEach(img => {
    img.srcset = images.header.srcset;
    img.src = images.header.src;
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const burgerButton = document.querySelector(".header-burger-button");
    const closeButton = document.querySelector(".header-mobile-menu-close-button");
    const menuBackground = document.querySelector(".header-mobile-menu-background");
    const menuLinks = document.querySelectorAll(".header-mobile-menu-link");
    const orderButton = document.querySelector(".header-mobile-menu-order-button");

    const desktopMenuButton = document.querySelector(".tittle-menu");
    const menuCenterList = document.querySelector(".header-desk-menu-list");
    const menuDeskLinks = document.querySelectorAll(".header-desk-menu-link");

    function openMobileMenu() {
        menuBackground.classList.add("is-open");
        document.body.style.overflow = "hidden";
    }

    function closeMobileMenu() {
        menuBackground.classList.remove("is-open");
        document.body.style.overflow = "";
    }

    if (burgerButton) {
        burgerButton.addEventListener("click", openMobileMenu);
    }


    if (closeButton) {
        closeButton.addEventListener("click", closeMobileMenu);
    }


    menuLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
            closeMobileMenu();
        });
    });


    if (menuBackground) {
        menuBackground.addEventListener("click", (event) => {
            if (event.target === menuBackground) {
                closeMobileMenu();
            }
        });
    }

    function openDesktopMenu() {
        menuCenterList.classList.add("is-open");
        document.body.style.overflow = "hidden";
    }

    function closeDesktopMenu() {
        menuCenterList.classList.remove("is-open");
        document.body.style.overflow = "";
    }

    if (desktopMenuButton) {
        desktopMenuButton.addEventListener("click", (event) => {
            event.stopPropagation();
            openDesktopMenu();
        });
    }

    menuDeskLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
            closeDesktopMenu();
        });
    });

    document.addEventListener("click", (event) => {
        if (!menuCenterList.contains(event.target) && !desktopMenuButton.contains(event.target)) {
            closeDesktopMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeMobileMenu();
            closeDesktopMenu();
        }
    });

    if (orderButton) {
        orderButton.addEventListener("click", (event) => {
            event.preventDefault();
            const workTogetherSection = document.getElementById("form-foot");
            if (workTogetherSection) {
                window.scrollTo({
                    top: workTogetherSection.offsetTop - 50,
                    behavior: "smooth"
                });
            }
            closeMobileMenu();
        });
    }
});
