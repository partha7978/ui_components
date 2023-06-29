const sounds = ['applause', 'success', 'tada'];

sounds.forEach(sound => {
    console.log(`   gellio`);
    let button = document.createElement('button');
    button.classList.add('btn');

    button.innerText = sound;
    document.getElementById('buttons').appendChild(button);

})