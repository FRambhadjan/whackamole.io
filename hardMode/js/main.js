console.log("js loaded.")

//LET................................................
let maximumTime = 1250;
let score = 0;
let playerPoints = 3;
let gameStarted = true;
let highscore = document.body.querySelector('.score');
//LET.................................................

//CONST..............................................................
const minimumTime = 600;
const playerPointsElement = document.querySelector('.player-points');
const allTiles = document.querySelectorAll('.tile');
const pressStart = document.querySelector('.start');
const lives1 = document.body.querySelector('.lives1');
const lives2 = document.body.querySelector('.lives2');
const lives3 = document.body.querySelector('.lives3');
//CONST..............................................................

//START BUTTON................................................
pressStart.addEventListener('click', function () {
    startGame();
    pressStart.remove();
});
//START BUTTON................................................

//RANDOM GETAL GENERATOR......................................
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
//RANDOM GETAL GENERATOR......................................

//TILES ZONDER ACTIVE FUNCTION.......................
if (gameStarted == true) {
    allTiles.forEach(function (tile) {
        console.log(tile)
        tile.addEventListener('click', function () {
            tileClicked(tile)
            if (playerPoints <= 0) {
                nolives();
            }
        })
    });
}
//TILES ZONDER ACTIVE FUNCTION........................

//TILES MET ACTIVE FUNCTION...................
function tileClicked(tile) {
    if (tile.classList.contains('active')) {
        console.log(score)
        score = score + 1
        highscore.textContent = score;
        maximumTime = maximumTime - 40;
    } else {
        playerPoints = playerPoints - 1;
    }
    if (playerPoints <= 2) {
        lives3.remove();
    }
    if (playerPoints <= 1) {
        lives2.remove();
    }
    if (playerPoints <= 0) {
        lives1.remove();
    }
    console.log(playerPoints);
    tile.classList.remove('active');
}
//TILES MET ACTIVE FUNCTION...................

//RANDOM TILE GENERATOR.............................................
function activateRandomTile() {
    const currentAciveTile = document.querySelector('.tile.active');
    if (currentAciveTile) {
        currentAciveTile.classList.remove('active');
    }

    let randomTileNumber = getRandomNumber(0, allTiles.length - 1);
    const selectedTile = allTiles[randomTileNumber];
    selectedTile.classList.add('active');
    startGame();
}
//RANDOM TILE GENERATOR..............................................

//STARTGAME FUNCTION..............................................
function startGame() {
    const randomTime = getRandomNumber(minimumTime, maximumTime);
    setTimeout(activateRandomTile, randomTime)
}
//STARTGAME FUNCTION..............................................

//DEATHSCREEN LINK........................................
function nolives() {
    window.location.href = "deathscreen/deathscreen.html"
}
//DEATHSCREEN LINK........................................



