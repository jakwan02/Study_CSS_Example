const slideBox = document.getElementsByClassName("slide-box")[0];
const btnBefore = document.getElementsByClassName("btn-before")[0];
const btnNext = document.getElementsByClassName("btn-next")[0];
let itemCount = 1;

btnNext.addEventListener("click", () => {
  if (itemCount == 1) {
    slideBox.style.left = "-720px";
    itemCount++;
  }
  else if (itemCount == 2) {
    slideBox.style.left = "-1440px";
    itemCount++;
  }
  else {
    console.log("마지막 컨텐츠");
  }
});

btnBefore.addEventListener("click", () => {
  if (itemCount == 1) {
    console.log("마지막 컨텐츠");
  }
  else if (itemCount == 2) {
    slideBox.style.left = "0px";
    itemCount--;
  }
  else if (itemCount == 3) {
    slideBox.style.left = "-720px";
    itemCount--;
  }
});