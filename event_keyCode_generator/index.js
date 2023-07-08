let data = document.querySelector(".event");

window.addEventListener("keydown", (e) => {
    console.log(e);
    data.innerHTML = `<div class="card">
        <h4>${e.key === ' ' ? 'Space' : e.key}</h4>
        <small>event.key</small>
    </div>
    <div class="card">
        <h4>${e.keyCode}</h4>
        <small>event.keyCode</small>
    </div>
    <div class="card">
        <h4>${e.code}</h4>
        <small>event.code</small>
    </div>`;
});
