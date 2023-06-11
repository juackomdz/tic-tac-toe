window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const reset = document.querySelector('#reset');
    const anunciador = document.querySelector('.announcer');

    let board = ['','','','','','','','',''];
    let currentPl = 'X';
    let isGameActive = true;

    const PlayerX_Win = 'PLAYERX_WIN';
    const PlayerO_Win = 'PLAYERO_WIN';
    const Empate = 'EMPATE';

    //condiciones para ganar almacenadas en un arreglo
    //cada array corresponde a 3 cuadriculas seguidas
    const condition = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6],
    ]
});

function ValidacionResultados() {
    let roundWin = false;
    for (let i = 0; i < 7; i++) {
        const winCondicion = condition[i];
        const a = board[winCondicion[0]];
        const b = board[winCondicion[1]];
        const c = board[winCondicion[2]];
    
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a===b && b===c) {
            roundWin = true;
            break;
        }
    }

    if (roundWin) {
        anuncio(currentPl === "X" ? PlayerO_Win : PlayerX_Win);
        isGameActive=false;
        return;
    }
    if (board.includes("")) {
        anuncio(Draw);
    }
}

const anuncio = (type) => {
    switch (type) {
        case PlayerO_Win:
            anunciador.innerHTML = 'Jugador <span class="playerO">O</span> Gana';
            break;
    
        case PlayerX_Win:
            anunciador.innerHTML = 'Jugador <span class="playerX">X</span> Gana';
            break;
        case Draw:
            anunciador.innerHTML = 'Empate';
            break;
    }
    anunciador.classList.remove("hide");
}