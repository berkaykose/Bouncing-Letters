const texts = document.getElementsByClassName('bg1');

for(let bg of texts) {
    bg.style.transition = 'all 2s';
}

for(let bg of texts) {
    bg.addEventListener('mouseover',() => {
        const colors = ['white', 'green', 'yellow', 'blue', 'gray', 'wheat'];
        const body = document.querySelector('body');
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        body.style.background = randomColor;
    })
}

setInterval(() => {
    for(let bg of texts) {
        const rotation = Math.floor(Math.random() * 360);
        const x = Math.floor(document.body.clientWidth * Math.random());
        const y = Math.floor(document.body.clientHeight * Math.random());

        bg.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
    }
},2000)

