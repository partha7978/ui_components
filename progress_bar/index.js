const progress = document.querySelector('.progress-bar');
const prev = document.querySelector('.prev-btn');
const next = document.querySelector('.next-btn');
const circles = document.querySelectorAll('.number');

let active = 1;
next.addEventListener('click',() => {
    active ++;
    if(active > circles.length) {
        active = circles.length;
    }
    // console.log(active);
    updateColor()
})
prev.addEventListener('click',() => {
    active --;
    if(active < 1) {
        active = 1;
       
    }
    updateColor()
})

const updateColor = () => {
    if(active === 1) {
        prev.disabled = true;
    }
    else if(active === circles.length) {
        next.disabled = true;
    }
    else {
        prev.disabled = false;
        next.disabled = false;
    }
    circles.forEach((circle, index) => {
        if(index < active) {
            circle.classList.add('active');
        }
        else
        {
            circle.classList.remove('active');
        }

        const actives = document.querySelectorAll('.active');

        console.log(actives.length, circles.length)

        progress.style.width = ((actives.length-1) / (circles.length-1)) * 100 + '%';
        console.log(progress.style.width)
    })
}
