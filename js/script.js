//mengaktifkan slidebar
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

//menghilangkan slidebar
const close = document.querySelector("#menu");
document.addEventListener("click", function (e) {
  if (!close.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
