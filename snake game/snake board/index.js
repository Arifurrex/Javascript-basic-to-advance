let grid = document.getElementById('grid');
let scoreDisplay = document.querySelector('.scoreDisplay');
let currentSnake = [2, 1, 0];
let derection = 1;
let appleIndex = 0;
let score = 0;
let left = document.querySelector(".left");
let bottom = document.querySelector(".bottom");
let right = document.querySelector(".right");
let up = document.querySelector(".top");
let width = 10;
let cuttentIndex = 0;
let speed = 0.8;
let intervalTime = 0;
let interval = 0;

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("keyup", control);
    createBoard();
    startGame();
    // playAgain.addEventListener("click", replay);
})
// create board
function createBoard() {
    for (i = 0; i < 100; i++) {
        let div = document.createElement('div');
        grid.appendChild(div);
    }
}
// staring game
function startGame(){
    squares = document.querySelectorAll(".grid div"); // div div div div
    // index number add
    squares.forEach(function myFunction2(value,index) {
        document.querySelectorAll(".grid div")[index].innerHTML = index;
    
    });
    randomApple(squares);
    direction = 1;
    scoreDisplay.innerHTML = score;
    intervalTime = 1000;
    currentSnake = [2, 1, 0]; //array
    currentIndex = 0;
    currentSnake.forEach(function myfunction(index) {
        squares[index].classList.add("snake"); // div[0]
        console.log(squares[index]);
    });
    // interval = setInterval(moveOutcome, intervalTime);
}

function moveSnake() {
    let squares = document.querySelectorAll(".grid div");
    let tail = currentSnake.pop(); // [2,1,0].pop(); 0
    squares[tail].classList.remove("snake"); // squares[0]= 0 index div
    currentSnake.unshift(currentSnake[0] + derection); //[2,1].unshift(2) = [2,2,1];   [2,1].unshift(2+1) = [3,2,1]; 
    console.log(currentSnake); // (3) [3, 2, 1]
    eatApple(squares, tail);
    squares[currentSnake[0]].classList.add("snake");

}

function eatApple(squares, tail) {
    if (squares[currentSnake[0]].classList.contains("apple")) {
        squares[currentSnake[0]].classList.remove("apple");
        squares[tail].classList.add("snake");
        currentSnake.push(tail);
        randomApple(squares);
        score++;
        scoreDisplay.textContent = score;
        
    }
   
}

function randomApple(squares) {
    
    do {
        appleIndex = Math.floor(Math.random() * squares.length);
    } while (squares[appleIndex].classList.contains("snake")) {
        squares[appleIndex].classList.add("apple");
    }
}

function control(e) {
    if (e.keycode === 39) {
        direction = 1;
    } else if (e.keycode === 38) {
        direction = -width;
    
    } else if (e.keycode === 37) {
        direction = -1;
    } else if (e.keycode === 40) {
        direction = +width;
    }
} 
    
up.addEventListener("click", () => (direction = -width));
bottom.addEventListener("click", () => (direction = +width));
bottom.addEventListener("click", () => (direction = -1));
bottom.addEventListener("click", () => (direction = 1));
    
    
// createBoard();
// startGame();
moveSnake();