
// SHOW/HIDE NAVBAR HAMBURGER MENU

var hamburger = document.getElementById("hamburger")
var navbarUl = document.getElementById("navbar-ul")
var navbar = document.getElementById("navbar")
var buttonTelephone = document.getElementById("button-telephone")
var headerId = document.getElementById("header")
var headerContainer = document.getElementById("header-container")
var buttonPhoneNumber = document.getElementById("button-phone-number")

var phoneSize = window.matchMedia("(max-width: 790px)")



hamburger.onclick = function() {

    if (navbar.style.display === "block") {
        navbar.style.display = "none"

    } else {
        navbar.style.display = "block"
    }
}

navbarUl.onclick = function() {

    if (phoneSize.matches) {
      navbar.style.display = "none"
    }
}





// ON SCROLL SHOW/HIDE/SCALE HAMBURGER NAVBAR AND SOCIAL

var previousScrollposition = window.pageYOffset
var socialContainer = document.getElementById("social-container")


window.onscroll = function() {
  var currentScrollPosition = window.pageYOffset

  if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
    
    if (previousScrollposition > currentScrollPosition) {

        hamburger.style.top = "-4rem"
        socialContainer.style.right = "2.6%"
        
        // Desktop size scaling navbar
        headerContainer.style.transform = "scale(1)"
        headerContainer.style.paddingTop = "5rem"
        buttonPhoneNumber.style.opacity = "1"

      } else {
        hamburger.style.top = "-15rem"
        socialContainer.style.right = "-6rem"
        
        // Desktop size scaling navbar
       if (!phoneSize.matches) {
          headerContainer.style.transform = "scale(0.8)"
          headerContainer.style.paddingTop = "2rem"
          buttonPhoneNumber.style.opacity = "0"
        }
        
    }
    previousScrollposition = currentScrollPosition

  }

}