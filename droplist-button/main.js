// const droplist = document.querySelector('button');
const droplist = document.getElementsByClassName('droplist')[0];
let display = false;

droplist.addEventListener('click', (e) => {
  e.preventDefault();
  if (display == true) {
    const childNode = document.getElementById("newList");
    droplist.removeChild(childNode);
    display = false;
  } else {
    const newList = document.createElement("div");
    newList.id = "newList";
    newList.style.position = "absolute";
    newList.style.top = "40px";
    newList.style.left = "0";
    newList.style.width = "196px";
    newList.style.height = "80px";
    newList.style.border = "1px solid #b2b2b2";
    droplist.appendChild(newList);
    display = true;
  }
});