const mainContainer = document.querySelector('.container');
const leftSide  = document.querySelector('.left');
const rightSide = document.querySelector('.right');

leftSide.addEventListener('mouseenter', () => mainContainer.classList.add('left-side'));
leftSide.addEventListener('mouseleave', () => mainContainer.classList.remove('left-side'));

rightSide.addEventListener('mouseenter', () => mainContainer.classList.add('right-side'));
rightSide.addEventListener('mouseleave', () => mainContainer.classList.remove('right-side'));
