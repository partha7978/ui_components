const sounds = ['applause', 'success', 'tada'];

sounds.forEach(sound => {
    console.log(`   gellio`);
    let button = document.createElement('button');
    button.classList.add('btn');

    button.innerText = sound;
    document.getElementById('buttons').appendChild(button);

    button.addEventListener('click', () => {
        stopSound();
        document.getElementById(`${sound}`).play();
    })

})

const stopSound = () => {
    sounds.forEach((sound) => {
        const song = document.getElementById(`${sound}`);

        song.pause();
        song.currentTime = 0;
    })
}
