const containerEl = document.querySelector('.container');
const createGridBtn = document.querySelector('.create-grid-btn');
const clearGridBtn = document.querySelector('.clear-grid-btn');
const gridSize = document.querySelector('.grid-size');

const rowsCols = 16;
gridSize.innerText = `Your grid size is: ${rowsCols}. You can create your own grid!`

function createGrid(rowsCols) {
  containerEl.innerHTML = '';

  const totalDivs = rowsCols * rowsCols;
  const squareSize = 100 / rowsCols;

  for (let i = 1; i <= totalDivs; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style.width = `${squareSize}%`;
    square.style.height = `${squareSize}%`;

    square.addEventListener('mouseenter', () => {
      square.style.backgroundColor = '#000';

    });
    containerEl.appendChild(square);
  }
}
createGrid(rowsCols);

createGridBtn.addEventListener('click', () => {
  const rowsCols = parseInt(prompt('Enter grid size in pixels'));

  if (isNaN(rowsCols) || rowsCols <= 0) {
    alert('Please enter valid positive numbers for rows and columns!');
  } else if (rowsCols > 100) {
    alert('Rows and columns cannot exceed 100!');
  } else {
    createGrid(rowsCols);
    gridSize.innerText = `Grid created! Your grid size is ${rowsCols}.`;
    setTimeout(() => {
      gridSize.innerText = 'Happy creativity!';
    }, 3000);
  }
});

clearGridBtn.addEventListener('click', () => {
  const squares = document.querySelectorAll('.square');
  squares.forEach((square) => {
    square.style.backgroundColor = '#fff';
  });
});