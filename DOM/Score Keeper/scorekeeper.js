var p1sh = document.getElementById("p1sh");
var p2sh = document.getElementById("p2sh");
var p = document.querySelector("p");
var numText = document.getElementById("maxVal");
var p1b = document.querySelector("#p1b");
var p2b = document.querySelector("#p2b");
var re = document.querySelector("#reset");
var winScoreD = document.querySelector("p span");

var p1count = 0;
var p2count = 0;
var gameOver = false;
var winScore = 5;

numText.addEventListener("change", function () {
    winScoreD.textContent = this.value;
    winScore = Number(this.value);
    reset();
});

re.addEventListener("click", function () {
    reset();
});

p1b.addEventListener("click", function () {
    if (!gameOver) {
        p1count++;
        if (p1count === winScore) {
            p1sh.classList.add("winner");
            gameOver = true;
        }
        p1sh.textContent = p1count;
    }
});

p2b.addEventListener("click", function () {
    if (!gameOver) {
        p2count++;
        if (p2count === winScore) {
            p2sh.classList.add("winner");
            gameOver = true;
        }
        p2sh.textContent = p2count;
    }
});

function reset() {
    p1count = p2count = 0;
    p1sh.textContent = p2sh.textContent = 0;
    gameOver = false;
    p1sh.classList.remove("winner");
    p2sh.classList.remove("winner");
}

