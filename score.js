// Iteration 8: Making scoreboard functional
let reset = document.getElementById("play-again-button")

reset.addEventListener('click', change)
function change(){

    window.open("./game.html","_self")
}   console.log(window.location.search)
let params = new URLSearchParams(window.location.search)

let score  = params.get("score")
console.log("score: ",score)

let scoreboard = document.getElementById("score-board")
scoreboard.textContent = score
