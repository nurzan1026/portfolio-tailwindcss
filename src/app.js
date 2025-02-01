// todo === Menambahkan gambar di tab browser
const gambarLink = document.createElement("link");
gambarLink.rel = "icon";
gambarLink.href = "/img/profile-iksan.png";
document.head.appendChild(gambarLink);

// ? ===== hamburger menu =====

const hamburgerMenu = document.querySelector("#menu-btn");
const navMenu = document.querySelector("#navbar-menu");


hamburgerMenu.addEventListener("click", function () {
  hamburgerMenu.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// ! ===== navbar fixed =====

window.onscroll = function () {
  const navbar = document.querySelector("header");
  const sticky = navbar.offsetTop;

  if (window.pageYOffset > sticky) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
};
