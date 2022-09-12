const container = document.querySelector('.container');
for(let i = 0; i < 256; i++){
    let square = document.createElement('div');
    square.classList = 'square';

    container.appendChild(square);
}
let hover = document.querySelectorAll('.square');


hover.forEach(square => square.addEventListener('mouseover', (e) => {square.classList.add('hover')}))