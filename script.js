const cells = document.querySelectorAll('.cell');
const statusText = document.getElementById('status');
const resetButton = document.getElementById('reset-button');
let currentPlayer = 'X';
let board = ['', '', '', '', '', '', '', '', ''];
let gameAction = true;


const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];


function handleCellClick(event){
    const cell = event.target;
    const index = cell.getAttribute('data-index');

    if (board[index] !== '' || !gameActive) return;


    board[index] = currentPlayer;
    cell.innerText = currentPlayer;

    checkForWinner();
    switchPlayer();
}

function checkForWinner() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a,b,c] = winningConditions[i];
        if(board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
}


if(roundWon) {
    statusText.innerText = `Player ${currentPlayer} wins!`;
    gameActive = false;
} else if (!board.includes('')) {
    statusText.innerText = 'It\'s a tie!';
    gameActive = false;
}
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? '0' : 'X';
    if(gameActive){
        statusText.innerText = `Player ${currentPlayer}'s turn`;
    }
}

function resetGame(){
    board= ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    statusText.innerText = `Player ${currentPlayer}'s turn`;
    cells.forEach(cell => cell.innerText= '');
}

cells.forEach(cell => cell.addEventListener('click', handleCellClick));
resetButton.addEventListener('click', resetGame);
statusText.innerText = `Player ${cuurentPlayer}'s turn`;