/////////////////MOBILE MENU////////////////////////////

function toggleMobileMenu() {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const menuItems = document.querySelectorAll(".menuli");
  const closeicon = document.querySelector(".close");
  const calltoaction = document.querySelector(".calltoaction");

  hamburger.addEventListener("click", function () {
    navbar.classList.toggle("active");
    if (navbar.classList.contains("active")) {
      hamburger.style.display = "none";
      closeicon.style.display = "block";
    }
  });
  closeicon.addEventListener("click", function () {
    navbar.classList.toggle("active");
    closeicon.style.display = "none";
    hamburger.style.display = "block";
  });

  menuItems.forEach(function (menuItem) {
    menuItem.addEventListener("click", function () {
      if (window.innerWidth < 770) {
        navbar.classList.remove("active");
        closeicon.style.display = "none";
        hamburger.style.display = "block";
      }
    });
  });

  calltoaction.addEventListener("click", function () {
    if (window.innerWidth < 770) {
      navbar.classList.remove("active");
      closeicon.style.display = "none";
      hamburger.style.display = "block";
    }
  });

  const mediaQuery = window.matchMedia("(max-width: 770px)");

  function handleMediaQueryChange(e) {
    if (e.matches) {
      hamburger.style.display = "block";
      closeicon.style.display = "none";
    } else {
      hamburger.style.display = "none";
      closeicon.style.display = "none";
      navbar.classList.remove("active");
    }
  }

  mediaQuery.addEventListener("change", handleMediaQueryChange);
}

toggleMobileMenu();
