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

const droplist3 = document.getElementsByClassName("droplist3")[0];
droplist3.addEventListener('focus', () => {
  const newList3 = document.getElementsByClassName("newList3")[0];
  newList3.classList.add('active');
});