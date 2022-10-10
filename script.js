const menu = document.createElement('div');
menu.setAttribute('class','menucontainer')
document.body.append(menu)

const btn = document.createElement('button');
menu.append(btn);
btn.textContent = 'Set new size';

const drawBtn = document.createElement('button');
menu.append(drawBtn);
drawBtn.textContent = 'Color';

const eraser = document.createElement('button');
menu.append(eraser);
eraser.textContent = 'Erase';

const container = document.createElement('div');
container.setAttribute('class','container');
document.body.appendChild(container);

function clearGrid() {
    container.innerHTML = '';
}

//Create grid using default value of 16x16

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

/* 'Erase' by changing background color back to white
    Make an erase button
    When clicked, the draw function switches to making target white instead of black
    Erase button changes to true when clicked
    How do I declare erase boolean value?

    create a variable declaring false
    let erasemode = false;
    make eventlistener for button to change this to true
    eraser.addEventListener('click') {
        erasemode = true;
    }
    in draw() {
        if (erasemode == true) {
            e.target.style.backgroundColor = 'white';
        } else {
            e.target.style.backgroundColor = 'black';
        }
    }
*/

let erasemode = false;
eraser.addEventListener('click', () => {
    erasemode = true;
});

let drawmode = true;
drawBtn.addEventListener('click', () => {
    if(erasemode == true) {
        erasemode = false;
        drawmode = true;
    }
});
//Opted to callback drawback function for flexibility

function draw(e) {
    if(erasemode == true) {
        e.target.style.backgroundColor = 'white';
    } else {
    e.target.style.backgroundColor = 'black';
    }
}

//Create a prompt for new grid value with button

btn.addEventListener('click', () => {
    clearGrid();
    let rowInput = prompt('Please enter row value between 16 and 100');
    let colInput = prompt('Please enter column value between 16 and 100');
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