 const btnTopo = document.getElementById("btnTopo");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      btnTopo.style.display = "block";
    } else {
      btnTopo.style.display = "none";
    }
  });

  btnTopo.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });