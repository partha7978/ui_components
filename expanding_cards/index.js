const cards = document.querySelectorAll('.card')

cards.forEach((card) => {
    card.addEventListener('click', () => {
        removeActive()
        card.classList.add('active')
    })
})

let removeActive = () => {
    cards.forEach(card => card.classList.remove('active'))
}