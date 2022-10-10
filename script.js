const btn = document.createElement('button');
document.body.append(btn);
btn.textContent = 'Set new size';

const container = document.createElement('div');
container.setAttribute('class','container');
document.body.appendChild(container);
// find a way to overwrite grid values with a prompt

function createGrid(area) {
    for(let i = 0; i < area; i++) {
        const box = document.createElement('div');
        box.classList.add('boxes');
        container.append(box)
        box.addEventListener('mouseover', draw);
    }
    container.style.setProperty('grid-template-rows', `repeat(${grid.rows}, 1fr)`)
    container.style.setProperty('grid-template-columns', `repeat(${grid.cols}, 1fr)`)
}

//on mouseclick, change class and add a background color to 'draw'
function draw(e) {
    e.target.style.backgroundColor = 'black';
}

function clearGrid() {
    container.innerHTML = '';
}

//make a prompt for new grid size
btn.addEventListener('click', () => {
    clearGrid();
    let rowInput = prompt('Please enter row value');
    let colInput = prompt('Please enter column value');
    grid = {rowInput, colInput};
    area = (grid.rowInput * grid.colInput);
    for(let i = 0; i < area; i++) {
        const box = document.createElement('div');
        box.classList.add('boxes');
        container.appendChild(box)
        box.addEventListener('mouseover', draw);
    }
    container.style.setProperty('grid-template-rows', `repeat(${grid.rowInput}, 1fr)`)
    container.style.setProperty('grid-template-columns', `repeat(${grid.colInput}, 1fr)`)
});

let grid = {rows: 16, cols: 16};
let area = (grid.rows * grid.cols);
createGrid(area);