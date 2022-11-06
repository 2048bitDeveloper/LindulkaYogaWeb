// SHOW/HIDE NAVBAR HAMBURGER MENU

var hamburger = document.getElementById("hamburger");
var navbarUl = document.getElementById("navbar-ul");
var navbar = document.getElementById("navbar");
var buttonTelephone = document.getElementById("button-telephone");
var headerId = document.getElementById("header");
var headerContainer = document.getElementById("header-container");
var buttonPhoneNumber = document.getElementById("button-phone-number");

var phoneSize = window.matchMedia("(max-width: 790px)");

hamburger.onclick = function () {
    if (navbar.style.display === "block") {
        navbar.style.display = "none";
    } else {
        navbar.style.display = "block";
    }
};

navbarUl.onclick = function () {
    if (phoneSize.matches) {
        navbar.style.display = "none";
    }
};

// ON SCROLL SHOW/HIDE/SCALE HAMBURGER NAVBAR AND SOCIAL

var previousScrollposition = window.pageYOffset;
var socialContainer = document.getElementById("social-container");

window.onscroll = function () {
    var currentScrollPosition = window.pageYOffset;

    if (
        document.body.scrollTop > 250 ||
        document.documentElement.scrollTop > 250
    ) {
        if (previousScrollposition > currentScrollPosition) {
            hamburger.style.top = "-3rem";
            socialContainer.style.right = "2.6%";

            // Desktop size scaling navbar
            headerContainer.style.transform = "scale(1)";
            headerContainer.style.paddingTop = "2rem";
            buttonPhoneNumber.style.opacity = "1";
        } else {
            hamburger.style.top = "-20vh";
            socialContainer.style.right = "-10vw";

            // Desktop size scaling navbar
            if (!phoneSize.matches) {
                headerContainer.style.transform = "scale(0.8)";
                headerContainer.style.paddingTop = "2rem";
                buttonPhoneNumber.style.opacity = "0";
            }
        }
        previousScrollposition = currentScrollPosition;
    }
};

// ┌─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=┐
// │***        SLIDE SHOW START          ***│
// └=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─┘

// ┌─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=┐
// │***          SWIPER START            ***│
// └=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─┘

let menu = ["Hatha yoga", "Jin yoga", "Aero yoga"];

const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>'}
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

    initialSlide: 1
});

// ┌─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=┐
// │***          SWIPER ENDS             ***│
// └=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─┘

// let slideIndex = 2;

// function plusSlides(n) {
//     showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//     showSlides((slideIndex = n));
// }

// function showSlides(n) {
//     let slides = document.getElementsByClassName("places-content");
//     let pills = document.getElementsByClassName("pill");
//     // Make all disappear.
//     if (n > slides.length) {
//         slideIndex = 1;
//     }
//     if (n < 1) {
//         slideIndex = slides.length;
//     }
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     // Pill in navigation changing color.
//     for (i = 0; i < pills.length; i++) {
//         pills[i].className = pills[i].className.replace(" active", "");
//     }

//     slides[slideIndex - 1].style.display = "grid";
//     pills[slideIndex - 1].className += " active";
// }

// showSlides(slideIndex);

// ┌─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=┐
// │***        SLIDE SHOW ENDS           ***│
// └=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─┘

// ┌─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=┐
// │***           MODAL START            ***│
// └=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─┘

let modal = document.getElementById("modal");
let modalButton = document.getElementById("modal-button");

modalButton.addEventListener("click", toggleModal);

function hideModal() {
    modal.style.display = "none";
}

function toggleModal() {
    // modal.style.display = "grid"

    if (modal.style.display === "none") {
        modal.style.display = "grid";
    } else {
        modal.style.display = "grid";
    }
}

// ┌─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=┐
// │***           MODAL ENDS             ***│
// └=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─=─┘

const today = new Day();
const timeInFuture = new Day(22, 11, 20)

// let main = document.getElementsByTagName("main");

if (today > timeInFuture) {
    modalButton.style.display = "none";
}
