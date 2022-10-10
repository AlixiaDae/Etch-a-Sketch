const btn = document.createElement('button');
document.body.append(btn);
btn.textContent = 'Set new size';

const container = document.createElement('div');
container.setAttribute('class','container');
document.body.appendChild(container);
// find a way to overwrite grid values with a prompt
const grid = {rows: 16, cols: 16};
const area = (grid.rows * grid.cols);



function createGrid(total) {
    for(let i = 0; i < total; i++) {
        const box = document.createElement('div');
        box.classList.add('boxes');
        container.append(box)
        box.addEventListener('mouseover', draw);
    }
    container.style.setProperty('grid-template-columns', `repeat(${grid.cols}, 1fr)`)
}

//on mouseclick, change class and add a background color to 'draw'
function draw(e) {
    e.target.style.backgroundColor = 'black';
}


//make a prompt for new grid size



createGrid(area);