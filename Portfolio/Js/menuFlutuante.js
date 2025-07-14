window.addEventListener("scroll", function () {
  const menu = document.getElementById("menuFlutuante");
  if (window.scrollY > 30) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});
