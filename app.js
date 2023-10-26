// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
var button= document.getElementById("play-button")
// console.log("button: ", button);
button.addEventListener("click", redirect)
function redirect(){
    window.open("./game.html","_self");
}
