// PROGRAM LOGIC
const main = document.querySelector('.wrapper');
// const grid = document.createElement('div');
// grid.classList.add('grid');
// grid.classList.add('d-none');
grid = genCells(100);
// main.append(grid);

const play = document.querySelector('.btn-play');
play.addEventListener ("click", function() {
    main.append(grid);
})







// FUNCTIONS
/**
 * Generate a grid with X numbers of cells, cell and grid are html div with specified classes.
 * @param {number} cellNumber
 * @returns {any} grid html element
 */
function genCells(cellNumber) {

    const grid = document.createElement('div');
    grid.classList.add('grid');    
    
    let cell = "";
    for (i = 1; i <= cellNumber; i++) {
        const curCell = i;
        cell = document.createElement('div');
        cell.classList.add('cell');
        cell.textContent = curCell;
        grid.append(cell);
    }

    return grid;
}