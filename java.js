const container = document.querySelector('.container');
let btn = document.querySelector('#btn');
let size = 256;

btn.addEventListener('click', () => {
    size = 0;
    size = prompt('What size do u want?');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    container.style.gridTemplateRows = `repeat(${size}, 1fr)` 
    size = Math.pow(size, 2);

    while(container.firstChild){
        container.removeChild(container.lastChild);
 }

    for(let i = 0; i < size; i++){
        let newSquare = document.createElement('div');
        newSquare.classList = 'square';
        container.appendChild(newSquare);
        
    };
    
})




for(let i = 0; i < size; i++){
    let newSquare = document.createElement('div');
    newSquare.classList = 'square';
    container.appendChild(newSquare);
    
};

container.addEventListener('mouseover', (e) => {
    if (e.target && e.target.classList.contains('square'))
    {let target = e.target;
      target.classList.add('hover')          }
})