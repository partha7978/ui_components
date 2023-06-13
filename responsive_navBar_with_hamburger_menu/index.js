let menuBar = document.querySelector('.menu-bar-icon');

// loop on menubar

menuBar.addEventListener('click', () => {
    document.querySelector('.header').classList.toggle('active');
})