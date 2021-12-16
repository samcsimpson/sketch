function play(size) {
    for(var j = 0; j < size; j++) {
        const row = document.createElement('row');
        container.appendChild(row);
        row.classList.add('row');
        for(var i = 0; i < size; i++) {
            const div = document.createElement('div');
            row.appendChild(div);
            div.classList.add('rbox');
        }
    }
    var fit = Math.round(parseInt(500/size)) + 'px';
    console.log(fit);
    const boxes = document.querySelectorAll('div');
    boxes.forEach((div) => {
        div.style.width = fit;
        div.style.height = fit;
        div.addEventListener('mouseenter', function(event) {
            div.style.backgroundColor = 'black';
        });
    });
}

const full = document.querySelector('full');
const container = document.querySelector('container');

const restart = document.createElement('button');
full.insertBefore(restart,container);
restart.classList.add('button');
restart.innerText = 'Restart';
restart.type = 'submit';
restart.addEventListener('click', function() {
    size = 100
    while(size > 64 || isNaN(size)) {
        size = window.prompt('How many squares?');
    }
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }
    play(size);
    console.log(size);
});
size = 16
play(size);