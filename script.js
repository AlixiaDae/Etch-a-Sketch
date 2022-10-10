const container = document.createElement('div');
container.setAttribute('class','container');
document.body.appendChild(container);
// find a way to overwrite grid values with a prompt
const grid = {rows: 16, cols: 16};
const area = (grid.rows * grid.cols);

createGrid(area);

function createGrid(total) {
    for(let i = 0; i < total; i++) {
        const box = document.createElement('div');
        container.append(box);
        box.textContent = `${i+1}`;
        box.setAttribute('class', 'boxes');
    }
    container.style.setProperty('grid-template-columns', `repeat(${grid.cols}, 1fr)`)
}