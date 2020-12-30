let scrollUp = document.querySelector(".scroll-top");

scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

window.onscroll = function() {
  moveUp();
};
function moveUp() {
  if (window.scrollY < 30) {
    scrollUp.style.display = "none";
  } else {
    scrollUp.style.display = "block";
  }
  // console.log(window.scrollY);
}
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  }, 300);
};
