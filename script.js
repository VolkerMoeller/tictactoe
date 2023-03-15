let fields = [];
let gameOver = false;
let currentShape = 'cross';
let counter = 0;


function fillShape(id) {
    if (!fields[id] && !gameOver) {
        counter++;
        if (currentShape == 'cross') {
            currentShape = 'circle';
            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.add('player-inactive');
            document.getElementById('player-2').classList.remove('player-inactive');
        }
        fields[id] = currentShape;
        draw();
        checkForWin();
    }
}


function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById(`circle-` + i).classList.remove('d-none');
        }
        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');
        }
    }
}


function removeDNoneAtLines() {
    for (let i = 1; i < 9; i++) {
        document.getElementById('line-' + i).classList.remove('d-none');
    }
}


function checkForWin() {
    removeDNoneAtLines();
    let winner;   
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scaleX(1)';
    }
    
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scaleX(1)';
    }
    
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scaleX(1)';
    }
    
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-5').style.transform = 'scaleX(1) rotate(90deg)';
    }

    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-6').style.transform = 'scaleX(1) rotate(90deg)';
    }

    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-4').style.transform = 'scaleX(1) rotate(90deg)';
    }
    
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'scaleX(1.2) rotate(45deg)';
    }
    
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'scaleX(1.2) rotate(-45deg)';
    }

    if (!winner && counter == 9 ) {
        gameOver = 'true';
        setTimeout(initGameoverNoWinner, 1000);
    }

    if (winner) {
        console.log('Gewonnen hat: ' + winner);
        gameOver = 'true';
        setTimeout(initGameover, 1000, winner);
    }
}


function initGameover(winner) {
    document.getElementById('game-over').classList.remove('d-none');
    document.getElementById('restart-btn').classList.remove('d-none');
    document.getElementById('winner').classList.remove('d-none');
    document.getElementById('winner').innerHTML = "Gewonnen hat: " + winner;
}


function initGameoverNoWinner() {
    document.getElementById('game-over').classList.remove('d-none');
    document.getElementById('restart-btn').classList.remove('d-none');
    document.getElementById('no-winner').classList.remove('d-none');
}


function restart() {
    counter = 0;
    gameOver = false;
    fields = [];
    document.getElementById('game-over').classList.add('d-none');
    document.getElementById('restart-btn').classList.add('d-none');
    document.getElementById('no-winner').classList.add('d-none');
    document.getElementById('winner').classList.add('d-none');
    for (let i = 1; i < 9; i++) {
        document.getElementById('line-' + i).classList.add('d-none');
    }
    for (let i = 0; i < 9; i++) {
        document.getElementById('cross-' + i).classList.add('d-none');
        document.getElementById('circle-' + i).classList.add('d-none');
    }
    document.getElementById('line-1').style = 'top: 62px';
    document.getElementById('line-2').style = 'top: 202px';
    document.getElementById('line-3').style = 'top: 342px';
    document.getElementById('line-4').style = 'left: 155px;';
    document.getElementById('line-5').style = 'right: 143px;';
    document.getElementById('line-6').style = '';
    document.getElementById('line-7').style = '';
    document.getElementById('line-8').style = '';
}