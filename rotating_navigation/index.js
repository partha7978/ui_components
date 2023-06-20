const open = document.querySelector(".open");
const close = document.querySelector(".close");
const menuRotate = document.querySelector(".main-container");

open.addEventListener("click", () => {
    menuRotate.classList.add("rotate");
})

close.addEventListener("click", () => {
    menuRotate.classList.remove("rotate");
})
