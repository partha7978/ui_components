const container = document.querySelector('.container');
const input = document.querySelector('.text');
const button = document.querySelector('.search-btn');

button.addEventListener("click", () => {
    container.classList.toggle('expand');
    input.focus();
})