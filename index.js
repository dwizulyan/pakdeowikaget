const buttonKaget = document.querySelector("[data-button-kaget]");
const img = document.querySelector(".img");
const auido = document.querySelector("[data-audio-kaget]");
let counter = document.querySelector("[data-count]");
counter.innerHTML = `Pakde Owi Sudah Kaget ${localStorage.clickcount} kali`;
buttonKaget.addEventListener("click", function () {
  img.src = "assets/images/pakde_kaget.png";
  auido.play();
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 0;
  }
  counter.innerHTML = `Pakde Owi Sudah Kaget ${localStorage.clickcount} kali`;
  setTimeout(function () {
    img.src = "./assets/images/pakde_normal.png";
  }, 500);
});
