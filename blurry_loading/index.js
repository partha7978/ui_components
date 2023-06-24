const loadingText = document.querySelector('.loading-text')
const background = document.querySelector('.background')

let loading = 0;
let setBlur = setInterval(load, 20);

function load() {
    loading ++;
    
    if(loading > 99) {
        clearInterval(setBlur);
    }

    loadingText.innerText = `${loading}%`
    loadingText.style.opacity = mapNumber(loading, 0, 100, 1, 0);
    background.style.filter = `blur(${mapNumber(loading, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function mapNumber (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}
