const cards = document.querySelectorAll('.card');

window.addEventListener('scroll', () => {
    showCards();
})

showCards();

function showCards() {
    const windowHeight = window.innerHeight / 5 * 4;    /* this is to trigger event in the bottom and slightly less height than the window height */

    cards.forEach(card => {
       const cardTop = card.getBoundingClientRect().top;  
    //    getBoundingClientRect().top will return the value of the top of the card.

       if(cardTop < windowHeight) {
        card.classList.add('show')
       }
       else
       {
        card.classList.remove('show')
       }
    })
}