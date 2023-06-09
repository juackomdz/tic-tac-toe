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