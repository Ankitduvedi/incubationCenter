const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach((link) => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

$(".images img").click(function () {
    $(this).addClass("zoom");
  });
  
  $(".images img").mouseleave(function () {
    $(this).removeClass("zoom");
  });
  